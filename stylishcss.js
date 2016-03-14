/**
 * Created by ehigginsiii on 3/14/16.
 */
var express = require('express');
var stylus = require('stylus');

var app = express();

app.use(stylus.middleware(process.argv[3]));

app.use(express.static(process.argv[3]));

app.get('/', function(req,res){
    //res.end(process.argv);
});


app.listen(process.argv[2]);