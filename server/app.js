//app.js 入口模块

var express = require('express');
var app = express();
var router = require('./router');
var bodyParser =  require('body-parser');
var api = require('./api');


app.use('/node_modules/',express.static('./node_modules/'))
app.use('/public/',express.static('./public/'))

// ---------------------服务端渲染  有利于SEO------------------
// ---------------------客户端渲染  不会被爬虫-----------------

app.engine('html',require('express-art-template'));
app.use(bodyParser.urlencoded({ extended:false }));
app.use(bodyParser.json());

app.use(router);
app.use(api);



app.listen(3000,() => console.log('crud is running!'));

