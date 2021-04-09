import React, { Component } from "react";

import classses from './Person.css'

class Person extends Component {

    static getDerivedStateFromProps(props, state) {
        console.log('[Person.js] getDerivedStateFromProps');
        return state;
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('[Person.js] shouldComponentUpdate');
        return true;
    }

    getSnapshotBeforeUpdate(previousProps, previousState) {
        console.log['[Person.js] getSnapshotBeforeUpdate'] 
    }

    componentDidUpdate() {
        console.log('[Person.js] componentDidUpdate');
    }

    render() {
        console.log('[Person.js] rendering...');
        return (
            // <div className='Person' style={style}>
            <div className={classses.Person}>
                <p>{this.props.name} is {this.props.age} years old!</p>
                <input type="text" onChange={this.props.onNameChange} value={this.props.name} />
                <p onClick={this.props.onDelete}>Click here to delete person</p>
            </div>
        );
    }
};

export default Person;