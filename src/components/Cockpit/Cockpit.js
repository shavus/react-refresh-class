import React, { useEffect, useRef, useContext } from 'react';

import classes from './Cockpit.css';

import AuthContext from '../../context/auth-context';

const cockpit = (props) => {

    const toggleBtnRef = useRef(null);
    const authContext = useContext(AuthContext);

    useEffect(() => {
        console.log('[Cockpit.js] useEffect');
        toggleBtnRef.current.click();
    }, []);

    useEffect(() => {
        console.log('[Cockpit.js] 2nd useEffect');
    });

    const assignedClasses = [];
    if (props.personsLength <= 2) {
        assignedClasses.push("red");
    }
    if (props.personsLength <= 1) {
        assignedClasses.push("bold");
    }

    let buttonClasses = '';
    if (props.personsDisplayed) {
        buttonClasses = classes.Red;
    }

    return (

        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <button ref={toggleBtnRef} className={buttonClasses} onClick={props.btnClicked}>
                Toggle User Data
            </button>
            {/* <AuthContext.Consumer>
                { context => <button onClick={context.authenticate}>Toggle Auth</button> }
            </AuthContext.Consumer> */}
            <button onClick={authContext.authenticate}>Toggle Auth</button>
        </div>

    )
};

//React.memmo wrapper means cockpit will only update when props change.
export default React.memo(cockpit);