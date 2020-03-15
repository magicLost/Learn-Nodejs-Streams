const fs = require('fs');
const net = require('net');
const through = require("through2");

let size = 0;

const write1 = (buf, enc, next) => {
    next(null, {length: buf.length});
}

const write2 = (obj, enc, next) => {
    size += obj.length;
    next();
}

/* IT WORKS WHEN WE PRESS CTRL + D AFTER STDIN IN TERMINAL */
const end = () => {
    console.log(`size = `, size);
}

//.pipe(through({objectMode: true}, write1))
process.stdin
    .pipe(through.obj(write1))
    .pipe(through.obj(write2, end));


