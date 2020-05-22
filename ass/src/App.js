import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    username: 'sss'
  }

  nameChangeHandler = (value) => {
    this.setState(
      {username : value}
    )
  }

  render = () => {
    return (
      <div className="App">
        <UserInput username={this.state.username} click={ (event) => this.nameChangeHandler(event.target.value)} ></UserInput>
        <UserOutput username={this.state.username}></UserOutput>
        <UserOutput username={this.state.username}></UserOutput>
      </div>
    );
  } 
}

export default App;
