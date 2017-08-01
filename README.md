WebAssembly Demo
================

Testing out WebAssembly by integrating C with JavaScript.

Simple Example
--------------

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

Then, run the following commands:

```
❯ make compile_html
❯ make run_server
```

And visit `http://localhost:8080/program.html` to see your output!

