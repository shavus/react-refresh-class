import React, { Component } from 'react';

import './App.css';

import Person from "./Person/Person";

class App extends Component {

    state = {
        persons: [
            {'id': 1, 'name': 'Scott', 'age': 32},
            {'id': 2, 'name': 'Breanne', 'age': 32},
        ],
        showPersons: false
    }

    nameChangedHandler = (event, id) => {
        const modifiedPersonIndex = this.state.persons.findIndex(person => person.id === id);
        const modifiedPerson = {...this.state.persons[modifiedPersonIndex]};
        modifiedPerson.name = event.target.value;

        const updatedPersons = [...this.state.persons];
        updatedPersons[modifiedPersonIndex] = modifiedPerson;

        this.setState({
            persons: updatedPersons,
        })
    }

    togglePersonsHandler = () => {
        this.setState({
            showPersons: !this.state.showPersons,
        })
    }

    deletePersonHandler = (personIndex) => {
        const allUsers = [...this.state.persons];
        allUsers.splice(personIndex, 1);
        this.setState({
            persons: allUsers,
        })
    }

    /*
     * Arrow notation can be ineffecient, better to use .bind(this) when possible.
     */
    render() {

        const style = {
            backgroundColor: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer'
        };

        let users = null;

        if (this.state.showPersons)
        {
            users = (
                <div>
                    {
                        this.state.persons.map((person, index) =>
                            <Person className="Person"
                                key={'person-' + person.id}
                                name={person.name}
                                age={person.age}
                                onNameChange={(event) => this.nameChangedHandler(event, person.id)}
                                onDelete={() => this.deletePersonHandler(index)}
                            />)
                    }
                </div>
            );
        }

        return (
            <div className="App">
                <button style={style} onClick={this.togglePersonsHandler}>
                    Toggle User Data
                </button>
                {users}
            </div>
        );
    }
}

export default App;
