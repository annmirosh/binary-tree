'use strict';
var
    React = require('react');

var Node = React.createClass({
    render: function () {
        var transform = 'translate(' + this.props.x + ',' + this.props.y + ')';
        return (
            <g className="node" transform={transform}>
                <circle r="4.5"></circle>
                <text x="-20" dy=".35em" text-anchor="end">{this.props.text}</text>
            </g>
        );
    }
});

module.exports = Node;
