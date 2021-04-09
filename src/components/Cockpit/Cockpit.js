import React from 'react';

import classes from './Cockpit.css';

const cockpit = (props) => {

    const assignedClasses = [];
    if (props.persons.length <= 2) {
        assignedClasses.push("red");
    } 
    if (props.persons.length <= 1) {
        assignedClasses.push("bold");
    }

    let buttonClasses = '';
    if (props.personsDisplayed)
    {
        buttonClasses = classes.Red;
    }

    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <button className={buttonClasses} onClick={props.btnClicked}>
                Toggle User Data
            </button>
        </div>
    )
};

export default cockpit;