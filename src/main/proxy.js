const fs = require('fs');
const net = require('net');

net.createServer((stream) => {
    console.log("STREAM", stream.toString());

    stream.pipe(net.connect(8080)).pipe(stream);

}).listen(8081);



