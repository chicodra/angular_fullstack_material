/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var SousDomaine = require('./sous_domaine.model');

exports.register = function(socket) {
  SousDomaine.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  SousDomaine.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('sous_domaine:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('sous_domaine:remove', doc);
}