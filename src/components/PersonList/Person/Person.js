import React, { Component } from "react";

import classses from './Person.css'

class Person extends Component {

    //can take props and modify state.
    static getDerivedStateFromProps(props, state) {
        console.log('[Person.js] getDerivedStateFromProps');
        return state;
    }

    //determines whether component should update, can be used to optimize
    shouldComponentUpdate(nextProps, nextState) {
        console.log('[Person.js] shouldComponentUpdate');
        return true;
    }

    getSnapshotBeforeUpdate(previousProps, previousState) {
        console.log['[Person.js] getSnapshotBeforeUpdate'] 
    }

    //fires after component updates.
    componentDidUpdate() {
        console.log('[Person.js] componentDidUpdate');
    }

    //firest before a component is removed from the DOM
    componentWillUnmount() {
        console.log('[Person.js] will unmount ')
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