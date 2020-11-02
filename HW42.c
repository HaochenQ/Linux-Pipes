#include <unistd.h>
#include <stdio.h>
//STDIN_FILENO
//STDOUT_FILENO
int main(int argc, char const *argv[])
{
    char ch;
    while (read(STDIN_FILENO, &ch, sizeof(char)) > 0)
    {
        if (ch == '\n')
        {
            ch = ' ';
        }
        write(STDOUT_FILENO, &ch, sizeof(char));
    }
    return 0;
}