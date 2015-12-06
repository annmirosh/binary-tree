'use strict';
var
    React = require('react'),
    d3 = require('d3');

var Link = React.createClass({
    render: function () {
        var diagonal = d3.svg.diagonal()
            .projection(function (d) {
                return [d.x, d.y];
            })(this.props.link);

        return (
            <path className="link" d={diagonal}></path>
        );
    }
});

module.exports = Link;
