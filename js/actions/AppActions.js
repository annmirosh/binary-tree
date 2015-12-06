'use strict';

var AppDispatcher = require('../dispatcher/AppDispatcher'),
    AppConstants = require('../constants/AppConstants');

var AppActions = {

    generateRandomNumber: function () {
        AppDispatcher.handleAction({
            actionType: AppConstants.GENERATE_RANDOM_NUMBER
        })
    }
};

module.exports = AppActions;
