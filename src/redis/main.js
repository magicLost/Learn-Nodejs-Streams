const redis = require("redis");
const { promisify } = require("util");


const client = redis.createClient();

const get = promisify(client.get).bind(client);
const set = promisify(client.set).bind(client);
const hset = promisify(client.hset).bind(client);
const hgetall = promisify(client.hgetall).bind(client);


client.on("error", function(error) {
  console.error("ON ERROR ", error);
  client.end(true);
});

const test = async (client) => {

    try{

        await hset("person1", "name", "Vasya");
        await hset("person1", "age", "123");

        const res = await hgetall("person1");

        console.log("GET RESULT ", res);

        client.end(true);
    
    }catch(error){
        console.error("CATCH ERROR", error);
        client.end(true);
    }

};

test(client);




