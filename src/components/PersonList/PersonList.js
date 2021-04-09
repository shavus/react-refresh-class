import React, { Component } from 'react';
import Person from './Person/Person'

class PersonList extends Component {

    static getDerivedStateFromProps(props, state) {
        console.log('[PersonList.js] getDerivedStateFromProps');
        return state;
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('[PersonList.js] shouldComponentUpdate');
        return nextProps.persons !== this.props.persons;
    }

    getSnapshotBeforeUpdate(previousProps, previousState) {
        console.log['[PersonList.js] getSnapshotBeforeUpdate'];
        return {message: 'Snapshot!'}
    }

    componentDidUpdate() {
        console.log('[PersonList.js] componentDidUpdate');
    }

    render() {
        console.log('[PersonList.js] rendering...');

        return (
            this.props.persons.map((person, index) =>
                <Person className="Person"
                    key={'person-' + person.id}
                    name={person.name}
                    age={person.age}
                    onNameChange={(event) => this.props.renamed(event, person.id)}
                    onDelete={() => this.props.deleted(index)}
                />
            )
        );
    }
};

export default PersonList;