'use strict';

var Node = require('../tree/Node'),
    EmptyNode = require('../tree/EmptyNode');

function BinaryTree() {
    this.root = null;
}

BinaryTree.prototype = {
    hasNodes: function () {
        return this.root !== null;
    },

    add: function (value) {
        var node = new Node(value),
            currentNode = null;

        if (!this.root) {
            this.root = node;
        } else {
            currentNode = this.root;
            while (true) {
                if (value < currentNode.value) {
                    if (currentNode.children[0] instanceof EmptyNode) {
                        currentNode.children[0] = node;
                        break;
                    } else {
                        currentNode = currentNode.children[0];
                    }
                } else if (value > currentNode.value) {
                    if (currentNode.children[1] instanceof EmptyNode) {
                        currentNode.children[1] = node;
                        break;
                    } else {
                        currentNode = currentNode.children[1];
                    }
                } else {
                    break;
                }
            }
        }

    },
    remove: function (value) {

    }
}
module.exports = BinaryTree;
