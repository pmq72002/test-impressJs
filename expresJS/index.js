var express = require('express');
var app = express();
var port = 3000;

app.get('/', function(req, res){
    res.send('pmq is me');
});

app.listen(port, function(){
    console.log('server listening on port '+ port);
});