const split = require('split2');
const fs = require('fs');
const {Readable} = require('stream');
const Catchment = require('catchment'); 

/*
    Collect a stream's output into a single output

    This module is very useful for unit tests
*/
/* const rs = process.stdin.pipe(split(JSON.parse));*/

const DATA = 'test-data\n Hello\n';

// creating a readable stream to use in the example
const rs = new Readable({
  read() {
    for (let i = 0; i < DATA.length; i++) {
      const c = DATA.charAt(i);
      this.push(c);
    }
    this.push(null);
  },
});

(async () => {
    try {
      const catchment = new Catchment()
      rs.pipe(catchment)
      const res = await catchment.promise
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  })()

//rs.pipe(process.stdout);


