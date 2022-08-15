const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// allows you to go through your routes and pass the HTTP request
// urlencoded allows you to acces the form data and use them like properties
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res){
    const value = req.body.calculate;
    let num1 = Number(req.body.num1);
    let num2 = Number(req.body.num2);
    let result = 0;
    if(value == "addition")
    {
        result = num1 + num2;
        res.send("The result of the calculation is " + result);
    }
    else if(value == "subtraction")
    {
        result = num1 - num2;
        res.send("The result of the calculation is " + result);
    }
    else if(value == "multiplication")
    {
        result = num1 * num2;
        res.send("The result of the calculation is " + result);
    }
    else if(value == "division")
    {
        result = num1/num2;
        res.send("The result of the calculation is " + result);
    }
    else
    {
        res.send("ERROR");
    }
});

app.listen(port, function(){
    console.log(`Example app listening on port ${port}`);
});