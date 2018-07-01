import React, { Component } from 'react';
import './App.css';
import Wrapper from "./components/wrapper/wrapper";
import Card from "./components/card/card";
import logos from "./logos.json"
import Header from "./components/header/header";

class App extends Component {
  state = {
    logos: logos,
    score: 0,
    highscore: 0,
    clicked: [],
  }

  // function to reset the game if they click on the same image
  resetGame = () => {
    this.setState({
      logos,
      score: 0,
      highscore: this.state.score,
      clicked: [],
    })
    this.shuffle(logos)
  }

  shuffle = array => {
    const newLogos = array.sort(() => Math.random() - 0.1)
    this.setState({ logos: newLogos })
  }

  // increase score on a successful click
  increaseScore = () => {
    const newScore = this.state.score + 1;
    this.setState({ score: newScore })
    console.log("new Score", newScore);
  }

  updateClicked = (id) => {
    const clicked = this.state.clicked;
    clicked.push(id);
    this.setState({ clicked });
    this.increaseScore();
    this.shuffle(logos)
  }

  // For every click event you need an event HANDLER
  handleClick = (id) => {
    this.state.clicked.includes(id) ? this.resetGame() : this.updateClicked(id);
    // this.updateState();

    // console.log(this.state.clicked.length)
  }

  render() {
    return (
      <Wrapper>
        <Header
          score={this.state.score}
          highscore={this.state.highscore}
        />



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
