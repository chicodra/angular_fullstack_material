/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Lecon = require('./lecon.model');

exports.register = function(socket) {
  Lecon.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Lecon.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('lecon:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('lecon:remove', doc);
}