'use strict';

function Node(value) {
    this.value = value;
    this.leftChild = null;
    this.rightChild = null;
}

function BinaryTree() {
    this.root = null;
}

BinaryTree.prototype = {
    add: function (value) {
        var node = new Node(value),
            currentNode = null;

        if (!this.root) {
            this.root = node;
        } else {
            currentNode = this.root;
            while (true) {
                if (value < currentNode.value) {
                    if (currentNode.leftChild === null) {
                        currentNode.leftChild = node;
                        break;
                    } else {
                        currentNode = currentNode.leftChild;
                    }
                } else if (value > currentNode.value) {
                    if (currentNode.rightChild === null) {
                        currentNode.rightChild = node;
                        break;
                    } else {
                        currentNode = currentNode.rightChild;
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
