const from = require('from2');
const messages = ['hello', ', ', 'world\n', null];

/* CREATE OUR FAKE READABLE STREAM */
from((size, next) => {
    next(null, messages.shift())
}).pipe(process.stdout);