const fs = require('fs')
const buf = fs.readFileSync('./addNums.wasm')
const lib = Wasm.instantiateModule(toUint8Array(buf)).exports

function toUint8Array(buf) {
	var u = new Uint8Array(buf.length)
	for (var i = 0; i < buf.length; ++i) {
		u[i] = buf[i]
	}
	return u
}

console.log(lib.addNums(2, 2))
console.log(lib.addNums.toString())

