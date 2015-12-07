'use strict';
var EmptyNode = require('../tree/EmptyNode');

function Node(value) {
    this.value = value;
    this.children = [new EmptyNode(), new EmptyNode()];
}

Node.prototype = {
    constructor: Node,

    isEmpty: function () {
        return false;
    },
    getChildrenCount: function () {
        var count = 0;
        this.children.forEach(function (child) {
            if (!child.isEmpty()) {
                count++;
            }
        });

        return count;
    }
};

module.exports = Node;