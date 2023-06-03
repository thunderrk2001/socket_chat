require('socketio-auth')(io, {
    authenticate: function (socket, data, callback) {
      socket.client.data=data
      return callback(null,data)
    }
});