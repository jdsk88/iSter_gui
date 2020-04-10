var wifi = require("Wifi");
wifi.connect("UPCD3E63E2", {password:"sV53jzKjwzsh"}, function(err){
  console.log("connected? err=", err, "info=", wifi.getIP());
});
wifi.stopAP();

var mypage = ` <html>
<head>
<style>
body {
width:100vw;
height: 100vh;
background:red;
}
</style>
</head>
<body>
<h1>I'am iSter wifi controller written in javasctipt!</h1>
</body>
</html>`;


function pageRequest(req, res) {
//  res.writeHead(200);
//  res.end("iSter esp javascript v.1");
  var a = url.parse(req.url, true);
  if (a.pathname=="/") {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end("Index Page");
  } else if (a.pathname=="/hello") {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(mypage);
  } else if (a.pathname=="/s/1/1") {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(mypage);
  } else {
    res.writeHead(404, {'Content-Type': 'text/plain'});
    res.end("404: Page "+a.pathname+" not found");
  }
}

require("http").createServer(pageRequest).listen(80);