'use strict';
var React = require('react'),
    Button = require('../components/Button'),
    Tree = require('../components/Tree'),
    AppActions = require('../actions/AppActions');

var Container = React.createClass({
    addNodeToTree: function () {
        AppActions.addNodeToTree();
    },
    render: function () {
        return (
            <div className="container">
                <Button localButtonClick={this.addNodeToTree}
                        text="Add node to the tree"/>
                <Tree></Tree>
            </div>
        );
    }
});

module.exports = Container;
