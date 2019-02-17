import React, { Component } from 'react';

class Counter extends Component {
    componentDidUpdate(previousProps, previousState) {
        //console.log('previousProps', previousProps);
        //console.log('previousState', previousState);
        if(previousProps.counter.value !== this.props.counter.value) {
            console.log(this.props.counter.id, 'updated', previousProps.counter.value, this.props.counter.value);
            // make ajax request to server
        } else {
            console.log(this.props.counter.id, 'no update', previousProps.counter.value, this.props.counter.value);
        }
    }

    componentWillUnmount() {
        console.log('Unmount', this.props.counter.id);
    }

    render() { 
        console.log('Counter - render', this.props.counter.id);

        return (
            <div>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button onClick={ () => this.props.onIncrement(this.props.counter) } className="btn btn-sm btn-secondary">Increment</button>
                <button onClick={ () => this.props.onDelete(this.props.counter.id) } className="btn btn-danger btn-sm m-2">Delete</button>
            </div>
        );
    }

    getBadgeClasses() {
        //console.log('getBadgeClasses');
        let classes = "badge m-2 badge-";
        classes += this.props.counter.value === 0 ? "warning" : "primary";
        
        return classes;
    }

    formatCount() {
        //console.log('formatCount');
        const { value } = this.props.counter;
        return value === 0 ? 'Zero' : value;
    }
}
 
export default Counter;