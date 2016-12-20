/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Niveau = require('./niveau.model');

exports.register = function(socket) {
  Niveau.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Niveau.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('niveau:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('niveau:remove', doc);
}