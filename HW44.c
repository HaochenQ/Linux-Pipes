#include <unistd.h>
#include <stdio.h>
//STDIN_FILENO
//STDOUT_FILENO
int main(int argc, char const *argv[])
{
    char str[81];
    str[80] = '\0';
    int strIndex = 0;
    char ch;
    while (read(STDIN_FILENO, &ch, sizeof(char)) > 0)
    {
        /*if (ch == EOF)
        {
            exit(0);
        }*/
        str[strIndex] = ch;
        strIndex++;
        if (strIndex == 80)
        {
            printf("%s\n", str);
            strIndex = 0;
        }
    }
    return 0;
}