const express = require('express');
const bodyParser = require('body-parser');
// const apiRouter = require('./router/api');

const app = express();

require('./conf/db');

//Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
// app.use('api', apiRouter);

app.get('/', (req, res) => {
    res.send("RESPONSE HARDCODED");
});

app.listen(3000, ()=> {
    console.log("Server started");
});