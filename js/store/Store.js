'use strict';

var AppDispatcher = require('../dispatcher/AppDispatcher'),
    EventEmitter = require('events').EventEmitter,
    AppConstants = require('../constants/AppConstants'),
    BinaryTree = require('../tree/BinaryTree'),
    _ = require('underscore'),
    randomNumber = 0, tree = new BinaryTree();

function generateRandomNumber() {
    randomNumber = Math.floor(Math.random() * 100 * (Math.random() > 0.5 ? 1 : -1));
}

function addNumberToTree() {
    tree.add(randomNumber);
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

    getNumber: function () {
        console.log(tree);
        return randomNumber;
    }

});

AppDispatcher.register(function (payload) {
    var action = payload.action;

    switch (action.actionType) {

        case AppConstants.GENERATE_RANDOM_NUMBER:
            generateRandomNumber();
            addNumberToTree();
            break;

        default:
            return true;
    }

    Store.emitChange();

    return true;

});

module.exports = Store;
