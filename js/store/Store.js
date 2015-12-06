'use strict';

var AppDispatcher = require('../dispatcher/AppDispatcher'),
    EventEmitter = require('events').EventEmitter,
    AppConstants = require('../constants/AppConstants'),
    BinaryTree = require('../tree/BinaryTree'),
    _ = require('underscore'),
    tree = new BinaryTree();

function generateRandomNumber() {
    return Math.floor(Math.random() * 100 * (Math.random() > 0.5 ? 1 : -1));
}

function addNumberToTree() {
    tree.add(generateRandomNumber());
}

var Store = _.extend({}, EventEmitter.prototype, {
    emitChange: function () {
        this.emit('change');
    },

    addChangeListener: function (callback) {
        this.on('change', callback);
    },

    removeChangeListener: function (callback) {
        this.removeListener('change', callback);
    },

    getTree: function () {
        return tree;
    }

});

AppDispatcher.register(function (payload) {
    var action = payload.action;

    switch (action.actionType) {

        case AppConstants.ADD_NODE_TO_TREE:
            addNumberToTree();
            break;

        default:
            return true;
    }

    Store.emitChange();

    return true;

});

module.exports = Store;
