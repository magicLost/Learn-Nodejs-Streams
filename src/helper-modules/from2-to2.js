const from = require('from2');
const to = require('to2');
const split = require('split2');

const messages = ['hello', ', ', 'world\n', null];

from((size, next) => {
    next(null, messages.shift())
}).pipe(to((buf, enc, next) => {
    console.log(buf.length);
    next();
}));
