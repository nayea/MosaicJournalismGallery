var express = require('express');
var logger = require('morgan');
var bodyParser = require('body-parser');
var path = require('path');
var fs = require('fs');


var app = express();
var port = 3000;
var router = express.Router();

// 확장자가 ejs 로 끈나는 뷰 엔진을 추가한다.
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// 미들웨어 셋팅
app.use(logger('dev'));
app.use(bodyParser.json({limit: '1000mb', extended: true}));
app.use(bodyParser.urlencoded({ limit: '1000mb', extended: false }));
//app.use(cookieParser());

// var router = require('./router/main')(app);

//MongoDB 접속
var mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');

var db = mongoose.connection;
db.on('error', console.error);
db.once('open', function(){
    console.log('mongodb connect');
});

var connect = mongoose.connect('mongodb://127.0.0.1:27017/mozaic', { useMongoClient: true });
autoIncrement.initialize(connect);


app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);


var server = app.listen(3000, function(){
    console.log("Express server has started on port 3000");
})

// app.use(express.static('public'));
app.use('/static', express.static(__dirname + '/public'));


// app.get('/', function(req, res){
//     res.render('index.html')
// });


var main = require('./router/main.js');
var gallery = require('./router/gallery.js');


app.use('/', main);
app.use('/gallery', gallery);



let client = require('cheerio-httpcli');






