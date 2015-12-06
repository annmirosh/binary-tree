'use strict';

var AppDispatcher = require('../dispatcher/AppDispatcher'),
    AppConstants = require('../constants/AppConstants');

var AppActions = {
    addNodeToTree: function () {
        AppDispatcher.handleAction({
            actionType: AppConstants.ADD_NODE_TO_TREE
        })
    }
};

module.exports = AppActions;
