const pump = require('pumpify');

/* IT'S LIKE PUMP BUT IT RETURN STREAM */
const stream = pump(stream, stream1, stream2);