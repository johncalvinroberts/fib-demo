#!/bin/bash
set -ev
cd src
docker run --rm -v $(pwd):/src trzeci/emscripten emcc -O3 \
  -s WASM=1 \
  -s MODULARIZE=1 \
  -s ASSERTIONS=1 \
  fib.c \
  -o artifacts/fib.js
