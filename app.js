var http = require('http');
import controller from './controller/controller';


const server = http.createServer((req, res) => {
    console.log('Server running at port 3000.');
    Controller.getDay("1995-12-25");
    res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('Hello World!');
  res.end();
});

server.listen(3000);
