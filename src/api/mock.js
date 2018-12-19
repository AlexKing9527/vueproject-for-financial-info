var express = require('express');
var fs = require('fs');
var path = require('path');
var app = express();

//跨芋头
app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By",' 3.2.1')
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});

// //金十后端
// var proxyPath = "https://www.jin10.com/newest_1.js?rnd=0.3226856686992934";//目标后端服务地址
// var proxyOption ={
//   target:proxyPath,
//   changeOrigoin:true,
//   ws: true,
//   pathRewrite: { '^/api': '/' }
// };
//
// app.use(express.static(__dirname + "static"));
// app.use("/api",proxy(proxyOption));

app.get('/api/swiper',(req,res)=>{
  var data = require('./slide.json');
  res.send(data)
});

app.get('/api/artical',(req,res)=>{
  var data = require('./artical.json');
  res.send(data)
});

app.use(express.static(path.resolve(__dirname, './dist')))

app.get('*', (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  const html = fs.readFileSync(path.resolve(__dirname, './dist/index.html'), 'utf-8');
  res.end(html);
})

app.listen(5050);
console.log('you are now listening to port 5050')
