const duplexify = require('duplexify');
const mkdirp = require('mkdirp');
const fs = require('fs');

const logger = (name) => {
    const d = duplexify();
    mkdirp('logs', (err) => {
        const w = fs.createWriteStream('logs/' + name + '.log');
        d.setWritable(w);
    })
    return d;
}

const stream = logger("hello");
let n = 0;
const id = setInterval(() => {
    stream.write(Date.now() + '\n');
    if(n++ === 5){
        clearInterval(id);
        stream.end();
    }
}, 100);

//d.setReadable();
//d.setWritable();

