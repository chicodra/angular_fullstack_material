/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Domaine = require('./domaine.model');

exports.register = function(socket) {
  Domaine.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Domaine.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('domaine:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('domaine:remove', doc);
}