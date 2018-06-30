import React, { Component } from 'react';
import './App.css';
import Wrapper from "./components/wrapper/wrapper";
import Card from "./components/card/card";
import logos from "./logos.json"

class App extends Component {
  state = {
    logos: logos, 
     // if there is no length in clicked the score is 0
    clicked: [], 
  }

  // if there is no length the score is 


  updateClicked = (id) => {
    const clicked = this.state.clicked;
    clicked.push(id);
    this.setState({clicked});
  }

  // For every click event you need an event HANDLER
  handleClick = (id) => {
    this.state.clicked.includes(id) ? console.log("reset game") : this.updateClicked(id);
    // this.updateState();

    // console.log(this.state.clicked.length)
  }

  render() {
    return (
      <Wrapper>
      
      {/* // currentScore = {this.state.currentScore}
      // highScore = {this.state.highScore} */}
      
      {this.state.logos.map(logos => (
      <Card
          key={logos.id}
          id={logos.id}
          handleClick={this.handleClick}
          title={logos.name}
          image={logos.image}
        />
      ))}
      </Wrapper>
    );
  }
}

export default App;
