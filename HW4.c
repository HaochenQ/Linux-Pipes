/**
 * Name: Haochen Qi
 * Honor pledge: I certify that no unauthorized assistance has been received or
 *               given in the completion of this work.
 * Description: This program take character input from stdin and print them out in a 80 
 *              characters per line basis.
 */
#include <stdio.h>
#include <unistd.h>
#include <stdlib.h>
#include <sys/types.h>
#include <sys/wait.h>
#include <stdbool.h>

//read input
void process1(int writeOut)
{
    int ch;
    //ch = getchar();
    while ((ch = getchar()) != EOF)
    {

        write(writeOut, &ch, sizeof(char));
        //ch = getchar();
    }
    //close(writeOut);
}

//parse '\n'
void process2(int readIn, int writeOut)
{
    char ch;
    while (read(readIn, &ch, sizeof(char)) > 0)
    {
        if (ch == '\n')
        {
            ch = ' ';
        }
        write(writeOut, &ch, sizeof(char));
    }
    //printf("process2 exited\n");
    //close(readIn);
    //close(writeOut);
}

//parse '**'
void process3(int readIn, int writeOut)
{
    /*char ch;
    char last;
        while (1) {
        read(readIn, &ch, sizeof(char));

        if (ch == '*' && last == '*') {
            ch = '^';
            write(writeOut, &ch, sizeof(char));
            last = '\0';
        } else {
            if (last != '\0') {
                write(writeOut, &last, sizeof(char));
            }

            last = ch;
        }
        if (ch == EOF) {
            write(writeOut, &ch, sizeof(char));

            return;
        }
    }*/
    char ch;
    char next;
    while (read(readIn, &ch, sizeof(char)) > 0)
    {
        if (ch == '*')
        {
            //"*"is not the last
            if (read(readIn, &next, sizeof(char)) > 0)
            {
                ;

                if (next == '*')
                {
                    ch = '^';
                    write(writeOut, &ch, sizeof(char));
                }
                /*if (next =='\0')
                {
                    write(writeOut, &ch, sizeof(char));
                    write(writeOut, &next, sizeof(char));
                }*/
                else
                {
                    write(writeOut, &ch, sizeof(char));
                    write(writeOut, &next, sizeof(char));
                }
                
            }
            //'*'is the last character
            else if (read(readIn, &next, sizeof(char)) == 0)
            {
                write(writeOut, &ch, sizeof(char));
            }
        }

        //ch != '*'
        else
        {
            write(writeOut, &ch, sizeof(char));
        }
    }
    //close(readIn);
    //close(writeOut);
}
//write output
void process4(int readIn)
{
    char str[81];
    str[80] = '\0';
    int strIndex = 0;
    char ch;
    while (read(readIn, &ch, sizeof(char)) > 0)
    {
        /*if (ch == EOF)
        {
            exit(0);
        }*/
        str[strIndex] = ch;
        strIndex++;
        // printf("%d %c\n", strIndex, str[strIndex-1]);
        if (strIndex == 80)
        {
            printf("%s\n", str);
            strIndex = 0;
        }
    }
    //close(readIn);
}

int main(int argc, char const *args[])
{
    //3 pipes
    int pipe1[2], pipe2[2], pipe3[2];
    //4 child processes
    pid_t child_pid[4];
    int i = 0;
    int n = 4;

    //initialize pipes
    if (pipe(pipe1) == -1 || pipe(pipe2) == -1 || pipe(pipe3) == -1)
    {
        perror("pipe error");
        exit(EXIT_FAILURE);
    }

    //run processes
    for (i = 0; i < n; i++)
    {
        child_pid[i] = fork();
        //fork error
        if (child_pid[i] ==-1)
        {
            perror("fork error");
            exit(EXIT_FAILURE);
        }
        //run child process
        else if (child_pid[i] == 0)
        {
            //process1, take input
            if (i == 0)
            {
                close(pipe2[0]);
                close(pipe2[1]);
                close(pipe3[0]);
                close(pipe3[1]);
                close(pipe1[0]);
                //printf("1");
                
                process1(pipe1[1]);
                //close(pipe1[1]);
                //exit(0);
            }
            //process2, parse '\n'
            else if (i == 1)
            {
                close(pipe2[0]);
                close(pipe3[0]);
                close(pipe3[1]);
                //printf("2");
                close(pipe1[1]);
                //close(pipe2[0]);
                process2(pipe1[0], pipe2[1]);
                close(pipe1[0]);
                //close(pipe2[1]);
                //exit(0);
            }
            //process3, parse '**'
            else if (i == 2)
            {
                close(pipe1[0]); 
                close(pipe1[1]); 
                //printf("3");
                close(pipe2[1]);
                close(pipe3[0]);
                process3(pipe2[0], pipe3[1]);
                //exit(0);
            }
            //process4, print output
            else if (i == 3)
            {
                close(pipe1[0]); 
                close(pipe1[1]); 
                close(pipe2[0]);
                close(pipe2[1]);
                //printf("4");
                close(pipe3[1]);
                process4(pipe3[0]);
                //exit(0);
            }
            exit(0);
        }
    }

    //close(pipe1[0]); close(pipe1[1]); 

    //wait for child processes
    while (i > 0)
    {
        wait(NULL);
        exit(EXIT_SUCCESS);
        i--;
    }
    return 0;
}
