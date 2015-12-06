'use strict';
var React = require('react'),
    Button = require('../components/Button'),
    _ = require('underscore'),
    AppActions = require('../actions/AppActions'),
    Store = require('../store/Store');

function getNumber() {
    return {
        number: Store.getNumber()
    };
}

var Container = React.createClass({

    getInitialState: function () {
        return getNumber();
    },

    generateRandomNumber: function () {
        AppActions.generateRandomNumber();
    },

    componentDidMount: function () {
        Store.addChangeListener(this._onChange);
    },

    componentWillUnmount: function () {
        Store.removeChangeListener(this._onChange);
    },

    _onChange: function () {
        this.setState(getNumber());
    },

    render: function () {
        return (
            <div className="container">
                <Button localButtonClick={this.generateRandomNumber}
                        text="Generate random number and insert it in the tree"/>
                <p>Number is:{this.state.number}</p>
            </div>
        );
    }
});

module.exports = Container;
