import React, { useEffect } from 'react';

import classes from './Cockpit.css';

const cockpit = (props) => {

    //will only update when props.persons is updated
    // useEffect(() => {
    //     console.log('[Cockpit.js] useEffect');
    //     setTimeout(() => {
    //         alert('saved data to cloud'); 
    //     }, 1000);
    // }, [props.persons]);

    //will only update when component renders the first time.  Array must be passed empty.
    useEffect(() => {
        console.log('[Cockpit.js] useEffect');
        const timer =  setTimeout(() => {
            alert('saved data to cloud');
        }, 1000);
        return () => {
            clearTimeout(timer);
            console.log('[Cockpit.js] cleanup work in useEffect')
        }
    }, []);

    const assignedClasses = [];
    if (props.persons.length <= 2) {
        assignedClasses.push("red");
    }
    if (props.persons.length <= 1) {
        assignedClasses.push("bold");
    }

    let buttonClasses = '';
    if (props.personsDisplayed) {
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