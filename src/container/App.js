import React, { Component } from 'react';

import classes from './App.css';

import Cockpit from '../components/Cockpit/Cockpit';
import PersonList from '../components/PersonList/PersonList'
import Aux from '../hoc/Aux';
import withClass from '../hoc/withClass';

class App extends Component {

    constructor(props) {
        super(props);
        console.log('[App.js] constructor.');
    }

    //This can be done in constructor as this.state =... however, this is the more modern approach.
    state = {
        persons: [
            { 'id': 1, 'name': 'Scott', 'age': 32 },
            { 'id': 2, 'name': 'Breanne', 'age': 32 },
            { 'id': 3, 'name': 'Doug', 'age': 29 },
        ],
        showPersons: false,
        showCockpit: true,
    }

    static getDerivedStateFromProps(props, state) {
        console.log('[App.js] getDerivedStateFromProps', props);
        return state;
    }

    componentDidMount() {
        console.log('[App.js] componentDidMount');
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('[App.js] shouldComponentUpdate');
        return true;
    }

    componentDidUpdate() {
        console.log('[App.js] componentDidUpdate');
    }

    nameChangedHandler = (event, id) => {
        const modifiedPersonIndex = this.state.persons.findIndex(person => person.id === id);
        const modifiedPerson = { ...this.state.persons[modifiedPersonIndex] };
        modifiedPerson.name = event.target.value;

        const updatedPersons = [...this.state.persons];
        updatedPersons[modifiedPersonIndex] = modifiedPerson;

        this.setState({
            persons: updatedPersons,
        })
    }

    toggleShowCockpit = () => {
        this.setState((prevState, props) => {
            return (
                {
                    showCockpit: !prevState.showCockpit,
                }
            );
        });
    }

    togglePersonsHandler = () => {
        this.setState((prevState, props) => {
            return (
                {
                    showPersons: !prevState.showPersons,
                }
            );
        });
    }

    deletePersonHandler = (personIndex) => {
        const allUsers = [...this.state.persons];
        allUsers.splice(personIndex, 1);
        this.setState({
            persons: allUsers,
        })
    }

    render() {
        console.log('[App.js] render');
        let users = '';

        if (this.state.showPersons) {
            users = (
                <PersonList
                    persons={this.state.persons}
                    deleted={this.deletePersonHandler}
                    renamed={this.nameChangedHandler}
                />
            );
        }

        let cockpit = '';
        if (this.state.showCockpit) {
            cockpit = (
                <Cockpit
                    title={this.props.appTitle}
                    personsLength={this.state.persons.length}
                    personsDisplayed={this.state.showPersons}
                    btnClicked={this.togglePersonsHandler}
                />
            )
        }

        return (
            //Aux can be replaced with React.Fragment
            <Aux>
                <button onClick={this.toggleShowCockpit} >Toggle Cockpit</button>
                {cockpit}
                {users}
            </Aux>
        );
    }
}

export default withClass(App, classes.App);
