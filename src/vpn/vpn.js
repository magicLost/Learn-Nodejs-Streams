const fs = require('fs');
const net = require('net');
const crypto = require('crypto');
const pass = 'abc123';

net.createServer((stream) => {

    stream
        .pipe(crypto.createDecipher('aes-192-ccm', pass))
        .pipe(net.connect(8080))
        .pipe(crypto.createCipher('aes-192-ccm', pass))
        .pipe(stream);

}).listen(8081);


