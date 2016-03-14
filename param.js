/**
 * Created by ehigginsiii on 3/14/16.
 */
var express = require('express');
var crypto = require('crypto');

var app = express();

app.put('/message/:id', function(req,res){
    var id = req.params.id;

    var hash = crypto.createHash('sha1')
        .update(new Date().toDateString() + id)
        .digest('hex');

    res.end(hash);
})

app.listen(process.argv[2]);