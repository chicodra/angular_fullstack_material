/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Matiere = require('./matiere.model');

exports.register = function(socket) {
  Matiere.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Matiere.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('matiere:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('matiere:remove', doc);
}