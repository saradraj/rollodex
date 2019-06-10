import React, { Component } from 'react';
import './App.css';
import GetUsers from './GetUsers';
// import OneUser from './OneUser';


class App extends Component {
  state = {
    users: [],
  }

  render() {
    return (
      <div className="App">
        <GetUsers />
      </div>
    )
  }
}

export default App;
