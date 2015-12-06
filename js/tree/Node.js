'use strict';
var EmptyNode = require('../tree/EmptyNode');

function Node(value) {
    this.value = value;
    this.children = [new EmptyNode(), new EmptyNode()];
}

Node.prototype = {
    getChildrenCount: function () {
        var count = 0;
        this.children.forEach(function (child) {
            if (child instanceof Node) {
                count++;
            }
        });

        return count;
    }
}
module.exports = Node;