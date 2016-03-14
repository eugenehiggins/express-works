/**
 * Created by ehigginsiii on 3/14/16.
 */
var express = require('express');
var app = express();

app.use(express.static(process.argv[3]));


app.listen(process.argv[2]);