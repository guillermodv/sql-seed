const express = require('express');
const bodyParser = require('body-parser');

const app = express();

//Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.send("RESPONSE HARDCODED");
});

app.listen(3000, ()=> {
    console.log("Server started");
});