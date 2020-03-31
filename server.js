var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

//var index = require('./routes/index');
var api = require('./server/routes/api');

var port = 4000;

var app = express();

//View Engine
//app.set('views', path.join(__dirname,'dist'));
// app.set('view engine','ejs');
// app.engine('html',require('ejs').renderFile);

//Set Static Folder
//app.use(express.static(path.join(__dirname,'dist')));

//Body Parser MW
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//app.use('/', index);
app.get('/', (req, res) => {
    //res.sendFile(path.join(__dirname,'dist/index.html'));
});
app.use('/api',api);

app.listen(port, function(){
    console.log('Server started on port' + port);
})