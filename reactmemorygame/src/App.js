import React, { Component } from "react";
import MemoryCard from "./components/MemoryCard";
import Wrapper from "./components/Wrapper";
import Counter from "./components/Counter";
import Title from "./components/Title";
import characters from "./characters.json";
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class App extends Component {

  // Setting this.state.characters to the characters array
  state = {
    characters,
    count: 0,
    chosen: []
  };

  shuffle = characters => {

    var m = characters.length, t, i;

    while(m) {
      i = Math.floor(Math.random() * m--)

      t = characters[m];
      characters[m] = characters[i];
      characters[i] = t
    }

    return this.setState({
      characters
    })
  }
  chooseCharacter = (id, event) => {

    event.preventDefault();

    if (this.state.chosen.some(character => character.id) === id) {
      this.setState({
        characters,
        count: 0,
        chosen: []
      });

      this.shuffle(this.state.characters)
      
    } else {

      this.handleScoreChange();

      const chosen = this.state.characters.filter(character => character.id === id);

      this.setState({ chosen })

      this.shuffle(this.state.characters)

    }

  }

  handleScoreChange = event => {

    this.setState({count: this.state.count + 1})

  }
  // Map over the characters array and create a new memory card for each of them
  render() {
    return (
      <Wrapper>
        <Container>
          <Row>
            <Col>
              <Title>
                Stranger Things 3 Memory Game
              </Title>
            </Col>
            <Col>
              <Counter 
              count={this.state.count} 
              onClick = {this.handleScoreChange} 
              />
            </Col>
          </Row>
          <Row>
            <Col>
              {
                this.state.characters.map(character => (
                  <MemoryCard
                    id={character.id}
                    key={character.id}
                    image={character.image}
                    name={character.name}
                  />
                ))
              }
            </Col>
          </Row>
        </Container>
      </Wrapper>
    )
  }
}

export default App;

