
compile_html:
	emcc program.c -s WASM=1 -o program.html

run_server:
	emrun --no_browser --port 8080 .

clean:
	rm program.html program.wasm program.js

.PHONY: compile_html run_server clean

