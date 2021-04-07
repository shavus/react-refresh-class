import React, { Component } from 'react';
import './App.css';
import Person from "./Person/Person";

class App extends Component {
  render() {
    return (
      <div className="App">
          <h1>Hello, I'm a react app.</h1>
          <p>This is really working!</p>
          <button>Switch Name</button>
          <Person name="Scott" age="32" >My Hobbies: Video Games</Person>
          <Person name="Breanne" age="33">My Hobbies: Travel</Person>
      </div>
    );
  }
}

export default App;
