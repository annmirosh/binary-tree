'use strict';

var AppDispatcher = require('../dispatcher/AppDispatcher'),
    AppConstants = require('../constants/AppConstants');

var AppActions = {
    addNodeToTree: function () {
        AppDispatcher.handleAction({
            actionType: AppConstants.ADD_NODE
        })
    },
    removeNodeFromTree: function (value) {
        AppDispatcher.handleAction({
            actionType: AppConstants.REMOVE_NODE,
            value: value
        })
    }
};

module.exports = AppActions;
