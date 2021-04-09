import React, { Component, Fragment } from "react";
import PropTypes from 'prop-types';

import classes from './Person.css';

import withClass from '../../../hoc/withClass';

//can extend PureComponent if want effective shouldComponentUpdate when checking on a change on any prop
class Person extends Component {

    constructor(props) {
        super(props);
        this.inputElementRef = React.createRef();
    }

    componentDidMount() {
        // this.inputElement.focus();
        this.inputElementRef.current.focus();
    }

    //determines whether component should update, can be used to optimize
    shouldComponentUpdate(nextProps, nextState) {
        console.log('[Person.js] shouldComponentUpdate');
        return true;
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
            <Fragment>
                <p>
                    {this.props.name} is {this.props.age} years old!
                </p>
                <input
                    type='text'
                    // ref={(inputEl) => {this.inputElement = inputEl}}
                    ref={this.inputElementRef}
                    onChange={this.props.onNameChange}
                    value={this.props.name}
                />
                <p onClick={this.props.onDelete}>
                    Click here to delete person
                </p>
            </Fragment>
        );
    }
};

Person.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    onNameChange: PropTypes.func,
    onDelete: PropTypes.func,
};

export default withClass(Person, classes.Person);