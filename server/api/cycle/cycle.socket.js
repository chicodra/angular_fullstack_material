/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Cycle = require('./cycle.model');

exports.register = function(socket) {
  Cycle.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Cycle.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('cycle:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('cycle:remove', doc);
}