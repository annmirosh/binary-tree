'use strict';
var
    React = require('react'),
    d3 = require('d3'),
    TreeStore = require('../store/TreeStore'),
    Node = require('../tree/Node'),
    NodeUI = require('../components/Node'),
    Link = require('../components/Link');

function getTree() {
    return {
        tree: TreeStore.getTree()
    };
}
var Tree = React.createClass({

    getInitialState: function () {
        return getTree();
    },
    render: function () {
        if (!this.state.tree.hasNodes()) {
            return (
                <p>Tree is empty</p>
            );
        }
        var transformMainG = 'translate(' + this.state.marginLeft + ',' + this.state.marginTop + ')';
        var links = this.state.links.map(function (link, index) {
            return (
                <Link link={link} key={index}></Link>
            );
        }, this);
        var nodes = this.state.nodes.map(function (node) {
            return (
                <NodeUI text={node.value} x={node.x} y={node.y} key={node.value}></NodeUI>
            );
        }, this);
        return (
            <svg>
                <g transform={transformMainG}>
                    {links}
                    {nodes}
                </g>
            </svg>
        );
    },
    componentDidMount: function () {
        TreeStore.addChangeListener(this._onChange);
    },

    componentWillUnmount: function () {
        TreeStore.removeChangeListener(this._onChange);
    },

    _onChange: function () {
        this.setState(getTree());
        this.calculateTreeState();

    },
    calculateTreeState: function () {
        var margin = {top: 20, right: 120, bottom: 20, left: 120},
            width = 960 - margin.right - margin.left,
            height = 800 - margin.top - margin.bottom;

        this.root = this.state.tree.root;

        this.tree = d3.layout.tree().size([height, width]);

        this.root.x0 = height / 2;
        this.root.y0 = 0;

        this.buildTree(this.root);

        this.setState({
            width: width,
            height: height,
            marginLeft: margin.left,
            marginTop: margin.top,
            nodes: this.nodes,
            links: this.links
        })
    },

    buildTree: function () {
        this.nodes = this.tree.nodes(this.root);
        this.nodes = this.nodes
            .filter(function (node) {
                return node instanceof Node;
            });
        this.nodes.forEach(function (d) {
            d.y = d.depth * 100;
        });

        this.links = this.tree.links(this.nodes)
            .filter(function (link) {
                return link.target instanceof Node;
            });
    }
});

module.exports = Tree;
