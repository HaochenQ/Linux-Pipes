#include <unistd.h>
#include <stdio.h>
//STDIN_FILENO
//STDOUT_FILENO
int main(int argc, char const *argv[])
{
    char ch;
    char next;
    while (read(STDIN_FILENO, &ch, sizeof(char)) > 0)
    {
        if (ch == '*')
        {
            if (read(STDIN_FILENO, &next, sizeof(char)) > 0)
            {
                if (next == '*')
                {
                    ch = '^';
                    write(STDOUT_FILENO, &ch, sizeof(char));
                }
                else
                {
                    write(STDOUT_FILENO, &ch, sizeof(char));
                    write(STDOUT_FILENO, &next, sizeof(char));
                }
            }
            else if (read(STDIN_FILENO, &next, sizeof(char)) == 0)
            {
                write(STDOUT_FILENO, &ch, sizeof(char));
            }
        }
        //ch != '*'
        else
        {
            write(STDOUT_FILENO, &ch, sizeof(char));
        }
    }
    return 0;
}
