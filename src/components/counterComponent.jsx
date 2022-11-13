import React, { Component } from 'react';

// controlled class
class Counter extends Component {

    // This is the second method for bind 'this' keyword to event handling function/method
    // constructor() {
    //     super();
    //     this.handleIncrement = this.handleIncrement.bind(this);
    // }

    // This is another way of binding 'this' keyword to event handling method using arrow function

    render() { 

        return (
            <div>
                <button
                    onClick={ () => this.props.onIncrement(this.props.counter) }
                    className={'btn btn-secondary btn-sm' + this.getMaginClass(2) }
                >
                    Increment
                    <span className={this.getBadgeClass() + this.getMaginClass(1)}>{this.formatCount()}</span>
                    Increment
                </button>
                <button onClick={ () => this.props.onDelete(this.props.counter.id) } className={'btn btn-danger btn-sm' + this.getMaginClass(2)}>Delete</button>
            </div>
        );
    }

    getBadgeClass() {
        let classes = "badge bg-";
        classes += this.props.counter.value === 0 ? 'warning' : 'primary';
        return classes;
    } 

    getMaginClass(m) {
        let margin = ` m-${m}`;
        return margin;
    }

    formatCount() {

        let { value } = this.props.counter;

        return value === 0 ? "Zero" : value;

    }
}
 
export default Counter;