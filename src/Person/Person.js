import React from "react";

const person = (props) => {
    return (
        <div className='Person'>
            <p>{props.name} is {props.age} years old!</p>
            <p>{props.children}</p>
        </div>
    );
};

export default person;