var hapi = require('hapi');
require('dotenv').load();

// Create a server with a host, port, and options
var server = module.exports = new hapi.Server();

server.connection({'port' : 3000})

require('./database');

require('./modules');

require('./auth');

require('./bootstrap');

server.start(function() {
	console.log('Server listennig on port ' + server.info.uri);
})