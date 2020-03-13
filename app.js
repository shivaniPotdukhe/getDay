var http = require('http');



const server = http.createServer((req, res) => {
    console.log('Server running at port 3000.');
    // res.writeHead('Hey!');
    res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('Hello World!');
  res.end();
});

server.listen(3000);
