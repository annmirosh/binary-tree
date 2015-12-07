'use strict';

var Node = require('../tree/Node'),
    EmptyNode = require('../tree/EmptyNode');

function BinaryTree() {
    this.root = new EmptyNode();
}

function minValue(root) {
    var min = root.value;
    while (!root.children[0].isEmpty()) {
        min = root.children[0].value;
        root = root.children[0];
    }
    return min;
}

function remove(root, value) {

    if (value < root.value)
        root.children[0] = remove(root.children[0], value);
    else if (value > root.value)
        root.children[1] = remove(root.children[1], value);

    else {
        if (root.children[0].isEmpty())
            return root.children[1];
        else if (root.children[1].isEmpty())
            return root.children[0];

        root.value = minValue(root.children[1]);
        root.children[1] = remove(root.children[1], root.value);
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
                    if (currentNode.children[0].isEmpty()) {
                        currentNode.children[0] = node;
                        break;
                    } else {
                        currentNode = currentNode.children[0];
                    }
                } else if (value > currentNode.value) {
                    if (currentNode.children[1].isEmpty()) {
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
        this.root = remove(this.root, value);
    }
}
module.exports = BinaryTree;
