var express = require('express')
var app = express()
var path    = require("path");

app.engine('.html', require('ejs').__express);
app.set('view engine', 'html');
app.use(express.static(__dirname + '/static'));

app.get('/', function(req, res){
    res.render('index', {
        title: "Maps Representer"
    });
});

var server = app.listen(9000, function () {

    var host = server.address().address
    var port = server.address().port

    console.log('Maps app listening at http://%s:%s', host, port)

})