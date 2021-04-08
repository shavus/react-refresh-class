import React from "react";
import styled from "styled-components";

// import './Person.css'

const StyledDiv = styled.div`
        width: 60%;
        margin: 16px auto;
        border: 1px solid #eee;
        box-shadow: 0 2px 3px #ccc;
        padding: 16px;
        text-align: center;        
        
        @media (min-width: 500px) {
            width: 450px;
        }`;

const person = (props) => {

    const style = {
        '@media (min-width: 500px)': {
            width: '450px',
        }
    };

    /*
    onChange updates state based on what is entered on input.
    value=props.name will update when state is changed with the current value
    without the onChange logic the input field becomes read-only, as it does not modify state.
     */
    return (
        // <div className='Person' style={style}>
        <StyledDiv>
            <p>{props.name} is {props.age} years old!</p>
            <input type="text" onChange={props.onNameChange} value={props.name}/>
            <p onClick={props.onDelete}>Click here to delete person</p>
        </StyledDiv>
    );
};

export default person;