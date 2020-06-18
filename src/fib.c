#include <emscripten.h>

EMSCRIPTEN_KEEPALIVE
int fib(int num) {
    if (num <= 1) return num;
    return fib(num - 1) + fib(num - 2);
}
