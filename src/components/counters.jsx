import React, { Component } from 'react';
import Counter from './counterComponent';


class Counters extends Component {

    state = {
        counters: [
            { id: 1, value: 0 },
            { id: 2, value: 0 },
            { id: 3, value: 0 },
            { id: 4, value: 0 },
            { id: 5, value: 0 }
        ]
    }

    handleDelete = (counterID) => {
        // console.log("Delete counter with ID:  ", counterID);
        const counters = this.state.counters.filter(c => c.id !== counterID);
        this.setState({ counters });
    }

    handleIncrement = (counter) => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = { ...counter };
        counters[index].value += 1;
        // console.log("Increase  ", counters[index]);
        this.setState({ counters })
    }

    handleReset = () => {
        const counters = this.state.counters.map(c => c.value = 0)
        this.setState({ counters })
    }

    render() { 
        return (
            <div>
                <button
                    onClick={this.handleReset}
                    className='btn btn-primary btn-sm m-2'>Reset</button>
                {this.state.counters.map(counter =>
                    <Counter onIncrement={this.handleIncrement} onDelete={this.handleDelete} key={counter.id} counter={counter} />
                )}
            </div>
        );
    }
}
 
export default Counters;