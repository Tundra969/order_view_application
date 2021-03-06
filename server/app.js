var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');

var pg = require('pg');
var connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/addressses';

app.set("port", (process.env.PORT || 5000));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({expanded: true}));

app.get('/name', function(req, res){
    var results = [];

    pg.connect(connectionString, function(err, client){
        var query = client.query("SELECT * FROM users;");

        // Stream results back one row at a time, push into results array
        query.on('row', function (row) {
            results.push(row);
        });

        // After all data is returned, close connection and return results
        query.on('end', function () {
            client.end();
            return res.json(results);
        });

        // Handle Errors
        if (err) {
            console.log(err);
        }
    });
});
app.get('/address', function(req,res){
    var results = [];

    pg.connect(connectionString, function(err, client){
        var query = client.query("SELECT users.name, addresses.address_type, addresses.address_street, addresses.address_city, addresses.address_state, addresses.address_zip FROM users JOIN addresses ON users.id = addresses.user_id WHERE users.id = $1",
            [req.query.id]);

        // Stream results back one row at a time, push into results array
        query.on('row', function (row) {
            results.push(row);
        });

        // After all data is returned, close connection and return results
        query.on('end', function () {
            client.end();
            return res.json(results);
        });

        // Handle Errors
        if (err) {
            console.log(err);
        }
    });
});

app.get('/orders', function(req,res){
    var results = [];

    pg.connect(connectionString, function(err, client){
        var query = client.query("SELECT orders.*, addresses.*, users.* FROM orders JOIN addresses ON addresses.address_id = orders.ship_address_id JOIN users ON users.id = orders.user_id WHERE orders.order_date > $1 AND orders.order_date < $2 AND orders.user_id = $3 ORDER BY order_date",
            [req.query.start.slice(0,10), req.query.end.slice(0,10), req.query.id]);

        // Stream results back one row at a time, push into results array
        query.on('row', function (row) {
            results.push(row);
        });

        // After all data is returned, close connection and return results
        query.on('end', function () {
            client.end();
            return res.json(results);
        });

        // Handle Errors
        if (err) {
            console.log(err);
        }
    });
});



app.get('/*', function(req, res, next){
    var file = req.params[0] || 'assets/views/index.html';
    res.sendFile(path.join(__dirname, "./public/", file));
});

app.listen(app.get("port"), function(){
    console.log("Listening on port: " + app.get("port"));
});

module.exports = app;