'use strict';

function EmptyNode() {
}


EmptyNode.prototype = {
    constructor: EmptyNode,

    isEmpty: function () {
        return true;
    }
};

module.exports = EmptyNode;