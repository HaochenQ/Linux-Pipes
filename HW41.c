#include <unistd.h>
#include <stdio.h>
int main(int argc, char const *argv[])
{
    int ch;
    ch = getchar();
    while (ch != EOF)
    {
        write(STDOUT_FILENO, &ch, sizeof(char));
        ch = getchar();
    }
    return 0;
}