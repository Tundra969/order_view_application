var express = require('express');
var app = express();
var index = require('./routes/index.js');

var path = require('path');
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({expanded: true}));

app.use('/', index);

app.set("port", (process.env.PORT || 5000));

app.listen(app.get("port"), function(){
    console.log("Listening on port: " + app.get("port"));
});

module.exports = app;