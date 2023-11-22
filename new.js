const express = require('express');
const app = express();

const port = process.env.PORT;


app.get('/' , (req,res)=>{
    res.send("Hello");
});

const server = app.listen(port ,()=>{
    console.log(`listining on ${port}`);
});

server.keepAliveTimeout = 120 * 1000;
server.headersTimeout = 120 * 1000;

