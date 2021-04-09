import React, { Component, Fragment } from "react";

import classes from './Person.css';

import withClass from '../../../hoc/withClass';

//can extend PureComponent if want effective shouldComponentUpdate when checking on a change on any prop
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
        console.log['[Person.js] getSnapshotBeforeUpdate'];
        return null;
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
        // This is to show multiple items can be returned from a render as a list, but it's often cumbersome.
        //  return [
        //     // <div className='Person' style={style}>
        //      <p key='i1' >{this.props.name} is {this.props.age} years old!</p>,
        //     <input
        //         key='i2'
        //         type="text"
        //         onChange={this.props.onNameChange}
        //         value={this.props.name}
        //     />,
        //     <p
        //         key='i3'
        //         onClick={this.props.onDelete}
        //     >
        //         Click here to delete person
        //     </p>
        // ];
        return (
            // <Aux>
            <Fragment>
                <p>{this.props.name} is {this.props.age} years old!</p>
                <input type="text" onChange={this.props.onNameChange} value={this.props.name} />
                <p onClick={this.props.onDelete}>Click here to delete person</p>
            </Fragment>
            // </Aux>
        );
    }
};

export default withClass(Person, classes.Person);