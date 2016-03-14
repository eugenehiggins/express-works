/**
 * Created by ehigginsiii on 3/14/16.
 */
var express = require('express');
var fs = require('fs');

var app = express();

app.get('/books', function(req,res) {

    var body = "";

    fs.readFile(process.argv[3], 'utf8', function (err, data) {
        //console.log(res);

        if (err) throw err;
        var object = JSON.parse(data);
        //console.log(object);
        res.json(object);
    });


})

app.listen(process.argv[2]);

