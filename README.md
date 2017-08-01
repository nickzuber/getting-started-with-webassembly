WebAssembly Demo
================

Testing out WebAssembly by integrating C with JavaScript.

Getting Started
---------------

Following along [here](http://webassembly.org/getting-started/developers-guide/), we need to install and configure the Emscripten SDK.

Once the SDK is installed, add these variables to your path.

```bash
# Emscripten Configs
# Adding directories to PATH:
export PATH=/Users/nick/cloned-repositories/emsdk:$PATH
export PATH=/Users/nick/cloned-repositories/emsdk/clang/fastcomp/build_incoming_64/bin:$PATH
export PATH=/Users/nick/cloned-repositories/emsdk/node/4.1.1_64bit/bin:$PATH
export PATH=/Users/nick/cloned-repositories/emsdk/emscripten/incoming:$PATH
export PATH=/Users/nick/cloned-repositories/emsdk/binaryen/master_64bit_binaryen/bin:$PATH

# Setting environment variables:
export EMSDK=/Users/nick/cloned-repositories/emsdk
export EM_CONFIG=/Users/nick/.emscripten
export EMSCRIPTEN=/Users/nick/cloned-repositories/emsdk/emscripten/incoming
export BINARYEN_ROOT=/Users/nick/cloned-repositories/emsdk/binaryen/master_64bit_binaryen
```

Simple HTML Example
-------------------

[Get started here](https://github.com/nickzuber/webassembly-demo/blob/master/simple_html_example)!
