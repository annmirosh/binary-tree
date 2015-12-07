'use strict';
var
    React = require('react'),
    AppActions = require('../actions/AppActions');

var Node = React.createClass({
    render: function () {
        var transform = 'translate(' + this.props.x + ',' + this.props.y + ')';
        return (
            <g className="node" transform={transform} onClick={this.handleClick}>
                <circle r="12"/>
                <text x="-6" y="3">{this.props.text}</text>
            </g>
        );
    },
    handleClick: function () {
        AppActions.removeNodeFromTree(this.props.text);
    }
});
module.exports = Node;
