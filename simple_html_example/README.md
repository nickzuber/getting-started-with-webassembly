Simple HTML Example
-------------------

We first need to compile the C file into WebAssembly and an HTML file so we can run our output in the browser. 

```
❯ emcc program.c -s WASM=1 -o program.html
```

Then serve the output over HTTP.

```
❯ emrun --no_browser --port 8080 .
```

You can run those commands mentioned above or simply run the following commands instead:

```
❯ make compile_html
❯ make run_server
```

And visit `http://localhost:8080/program.html` to see the result!
