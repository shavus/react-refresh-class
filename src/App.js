import React, { Component } from 'react';
import './App.css';
import Person from "./Person/Person";

class App extends Component {

    state = {
        persons: [
            {'name': 'Soctt', 'age': 34},
            {'name': 'Breanna', 'age': 33},
        ]
    }

    switchNameHandler = () => {
        //Don't mutate state - this.state.persons[1].name = 'Bree';
        this.setState({
            persons: [
                {'name': 'Scott', 'age': 32},
                {'name': 'Bree', 'age': 32},
            ]
        })
    }

    render() {
        return (
            <div className="App">
                <h1>Hello, I'm a react app.</h1>
                <p>This is really working!</p>
                <button onClick={this.switchNameHandler}>Fix Errors</button>
                <Person
                    name={this.state.persons[0].name}
                    age={this.state.persons[0].age}
                />
                <Person
                    name={this.state.persons[1].name}
                    age={this.state.persons[1].age}
                />
            </div>
        );
    }
}

export default App;
