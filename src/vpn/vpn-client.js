const net = require('net');
const crypto = require('crypto');
const pass = 'abc123';

const stream = net.connect(8081, 'localhost');

process.stdin
    .pipe(crypto.createDecipher('aes-192-ccm', pass))
    .pipe(stream)
    .pipe(crypto.createCipher('aes-192-ccm', pass))
    .pipe(stream);
