'use strict';

var Node = require('../tree/Node'),
    EmptyNode = require('../tree/EmptyNode');

function BinaryTree() {
    this.root = new EmptyNode();
}

function minValue(root) {
    var min = root.value;
    while (!root.getLeft().isEmpty()) {
        min = root.getLeft().value;
        root = root.getLeft();
    }
    return min;
}

function remove(root, value) {

    if (value < root.value)
        root.setLeft(remove(root.getLeft(), value));
    else if (value > root.value)
        root.setRight(remove(root.getRight(), value));

    else {
        if (root.getLeft().isEmpty())
            return root.getRight();
        else if (root.getRight().isEmpty())
            return root.getLeft();

        root.value = minValue(root.getRight());
        root.setRight(remove(root.getRight(), root.value));
    }

    return root;
}

BinaryTree.prototype = {
    constructor: BinaryTree,

    hasNodes: function () {
        return !this.root.isEmpty();
    },

    add: function (value) {
        var node = new Node(value),
            currentNode = null;

        if (this.root.isEmpty()) {
            this.root = node;
        } else {
            currentNode = this.root;
            while (true) {
                if (value < currentNode.value) {
                    if (currentNode.getLeft().isEmpty()) {
                        currentNode.setLeft(node);
                        break;
                    } else {
                        currentNode = currentNode.getLeft();
                    }
                } else if (value > currentNode.value) {
                    if (currentNode.getRight().isEmpty()) {
                        currentNode.setRight(node);
                        break;
                    } else {
                        currentNode = currentNode.getRight();
                    }
                } else {
                    break;
                }
            }
        }

    },

    remove: function (value) {
        this.root = remove(this.root, value);
    }
}
module.exports = BinaryTree;
