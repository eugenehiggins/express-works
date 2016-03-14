/**
 * Created by ehigginsiii on 3/14/16.
 */
var express = require('express');
var querystring = require('querystring');

var app = express();

app.get('/search', function(req,res){
    var query = req.query;

    res.send(query);
})

app.listen(process.argv[2]);
