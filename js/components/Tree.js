'use strict';
var React = require('react');

var Tree = React.createClass({
    render: function () {
        return (
            <button onClick={this.props.localButtonClick}>{this.props.text}</button>
        );
    }
});

module.exports = Button;
