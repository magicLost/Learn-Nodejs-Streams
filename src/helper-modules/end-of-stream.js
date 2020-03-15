const onend = require('end-of-stream');

onend(stream, () => {
    console.log("Stream ends");
});