/* RUN MANY STREAMS AND IF WILL BE ERROR CLOSE ALL STREAMS */
const from = require('from2');
const to = require('to2');
//const split = require('split2');
const through = require('through2');
const pump = require('pump'); 

const messages = ['hello', ', ', 'world\n', null];

const transformToUpper = (buf, enc, next) => {
    //null - error object
    next(null, buf.toString().toUpperCase());
}

const replace = (buf, enc, next) => {
    next(null, buf.toString().replace('HELLO', "FUCK"));
}
   

/* from((size, next) => {

    next(null, messages.shift())

}).pipe(

    through(transformToUpper)

).pipe(

    through(replace)

).pipe(to((buf, enc, next) => {

    console.log(buf + " | " + buf.length);
    next();

})); */
 
pump(
    from((size, next) => {

        next(null, messages.shift())
    
    }),
    through(transformToUpper),
    through(replace),
    to((buf, enc, next) => {

        console.log(buf + " | " + buf.length);
        next();
    
    }),
    function(error){
        console.log('pipe finished', error);
    }
); 