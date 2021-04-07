import React from "react";

const person = (props) => {
    return (
        <div className='Person'>
            <p onClick={props.clickAction}>{props.name} is {props.age} years old!</p>
        </div>
    );
};

export default person;