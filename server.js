var http = require('http');
var fs = require('fs');


var server = http.createServer(function(req, res){

  var msg = "";
  var path = req["url"];

  if (path == "/"){
    var html = fs.readFileSync('./index.html');
    msg = html;
    res.end(msg);
  } else if (path == "/phaser.min.js"){
    var file = fs.readFileSync('./phaser.min.js');
    msg = file;
    res.end(msg);
  } else if (path == "/main.js"){
    var file = fs.readFileSync('./main.js');
    msg = file;
    res.end(msg);
  } else if (path == "/assets/player.png"){
    var player = fs.readFileSync('./assets/player.png');
    msg = player;
    res.end(msg);
  } else if (path == "/assets/wallVertical.png"){
    var wallVert = fs.readFileSync('./assets/wallVertical.png');
    msg = wallVert;
    res.end(msg);
  } else if (path == "/assets/wallHorizontal.png"){
    var wallHor = fs.readFileSync('./assets/wallHorizontal.png');
    msg = wallHor;
    res.end(msg);
  } else if (path == "/style.css"){
    var stylesheet = fs.readFileSync('./stylesheets/style.css');
    msg = stylesheet;
    res.end(msg);
  } else if (path == "/assets/coin.png"){
    var coin = fs.readFileSync('./assets/coin.png');
    msg = coin;
    res.end(msg);
  }

  res.end(msg);

});

server.listen(2000);
