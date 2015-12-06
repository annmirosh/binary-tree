'use strict';
var
    React = require('react');

var Node = React.createClass({
    render: function () {
        var transform = 'translate(' + this.props.x + ',' + this.props.y + ')';
        return (
            <g className="node" transform={transform}>
                <circle k r="12"></circle>
                <text x="-6" y="3">{this.props.text}</text>
            </g>
        );
    }
});
module.exports = Node;
