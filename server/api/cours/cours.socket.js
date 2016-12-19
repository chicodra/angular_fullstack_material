/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Cours = require('./cours.model');

exports.register = function(socket) {
  Cours.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Cours.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('cours:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('cours:remove', doc);
}