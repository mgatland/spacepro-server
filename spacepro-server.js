"use strict";

process.title = 'spacepro-server';

var PeerServer = require('peer').PeerServer;
var port = process.env.PORT || 80;
var server = new PeerServer({ port: port });
console.log("Started PeerServer on port " + port);



server.on('connection', function(id) {
    console.log("New user: " + id);
});

server.on('disconnect', function(id) {
    console.log("User " + id + " disconnected.");
});