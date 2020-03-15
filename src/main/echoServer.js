const fs = require('fs');
const net = require('net');
 
net.createServer((stream) => {
 
   stream.pipe(stream);
}).listen(8080);
