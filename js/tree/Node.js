'use strict';
var EmptyNode = require('../tree/EmptyNode');

function Node(value) {
    this.value = value;
    this.children = [new EmptyNode(), new EmptyNode()];
}

module.exports = Node;