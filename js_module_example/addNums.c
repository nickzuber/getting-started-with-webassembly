// addNums.c
#include <stdio.h>
#include <emscripten/emscripten.h>

int add (int a, int b) {
	return a + b;
}

#ifdef __cplusplus
extern "C" {
#endif

void EMSCRIPTEN_KEEPALIVE myFunction(int argc, char ** argv) {
    printf("MyFunction Called\n");
}

#ifdef __cplusplus
}
#endif

