/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Classe = require('./classe.model');

exports.register = function(socket) {
  Classe.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Classe.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('classe:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('classe:remove', doc);
}