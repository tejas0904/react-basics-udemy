import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';

class App extends Component {

  state = {
    text: []
  };

  textChangeHandler = (event) => {
    this.setState(
      {
        text: event.target.value.split('')
      }
    );
  }

  deleteCharHandler = (textIndex) => {
    console.log(textIndex);
    let text = [...this.state.text];

    text.splice(textIndex,1);

    this.setState(
      {
        text: text
      }
    );
  }

  render() {

    let textArray = null;

    if (this.state.text.length > 0) {

      textArray = (
        <div>
          {this.state.text.map((character, index) => {
            return (
              <CharComponent key={index} click={() => this.deleteCharHandler(index)} character={character} ></CharComponent>
            )
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1> Assignment 2</h1>
        <h2> Text Properties </h2>
        <input type="text" onChange={this.textChangeHandler} value={this.state.text.join('')} ></input>
        <br />
        {this.state.text.length > 0? (<p>Text Value :: {this.state.text}</p>) : null}
        {this.state.text.length > 0? (<ValidationComponent textLength={this.state.text.length} ></ValidationComponent>) : null}
        {textArray}
      </div>
    );
  }
}

export default App;
