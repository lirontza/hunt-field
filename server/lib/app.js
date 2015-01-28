var http = require('http'),
    express = require('express'),
    rootFolder = './app',
    port = 80;

var app = express()
    .use(express.bodyParser())
    .use(express.static(rootFolder))
    .use(express.directory(rootFolder));

var server = http.createServer(app);
server.listen(port, function () {
        console.log('Server is running at port ' + port);
    }).on('error', function (e) {
        if (e.code === 'EADDRINUSE') {
            console.log('Error: Address is already in use.');
        }
    });
