//var writer = require('flush-write-stream') alias for to2
const to = require('to2');
const split = require('split2');

/* CREATE OUR FAKE WRITABLE STREAM */
process.stdin.pipe(split()).pipe(to((buf, enc, next) => {
    console.log(buf.length);
    next();
})) 

/* var writer = require('flush-write-stream')
 
var ws = writer(write, flush)
 
ws.on('finish', function () {
  console.log('finished')
})
 
ws.write('hello')
ws.write('world')
ws.end()
 
function write (data, enc, cb) {
  // i am your normal ._write method
  console.log('writing', data.toString())
  cb()
}
 
function flush (cb) {
  // i am called before finish is emitted
  setTimeout(cb, 1000) // wait 1 sec
} */