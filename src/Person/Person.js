import React from "react";

import classses from './Person.css'

const person = (props) => {

    // const style = {
    //     '@media (min-width: 500px)': {
    //         width: '450px',
    //     }
    // };

    /*
    onChange updates state based on what is entered on input.
    value=props.name will update when state is changed with the current value
    without the onChange logic the input field becomes read-only, as it does not modify state.
     */
    return (
        // <div className='Person' style={style}>
        <div className={classses.Person}>
            <p>{props.name} is {props.age} years old!</p>
            <input type="text" onChange={props.onNameChange} value={props.name}/>
            <p onClick={props.onDelete}>Click here to delete person</p>
        </div>
    );
};

export default person;