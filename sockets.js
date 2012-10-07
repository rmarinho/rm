var clients = []
  , io = require('socket.io')
  , global_socket;
  
exports.initialize = function(server){
	console.log('open socket');
	// attach socket.io to the server
	global_socket = io.listen(server);

	// set up an event that handles connections that get made to the server.
	// the callback for this event will supply the socket as a parameter.
	global_socket.on('connection', function(client) {
								console.log('client connected'+ client.id); 
								clients.push(client);
					//	console.log(io.sockets.clients().lenght()); 
				// on the socket we can attach events, lets respond to the client when
				// we recieve a message.
 // client.on('message', function(message) {
    // we can log the message on the server side.
   // console.log(message); 
    // then send it back to the client.
   // client.send('Thanks for telling me "' + message + '"');
  });
}

exports.SendMessage = function(msg){
						global_socket.sockets.emit('message',msg);
					};

exports.Clients = clients;
exports.Socket = global_socket;

