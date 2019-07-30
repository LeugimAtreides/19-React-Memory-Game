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
    available: []
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

  empty = id => {

    const available = this.state.available.filter(character => character.id === id)

    this.setState({
      available
    })

    console.log(available)
  
  }
  chooseCharacter = id => {
    console.log(id)
    // event.preventDefault();
    console.log(this.state.available.filter(character => character.id !== id), "no item in the array matches the id passed in")
    console.log(this.state.available.filter(character => character.id === id), "an item in the array matches the id passed in")
    
    if (this.state.available.length > 0 && this.state.available.some(character => character.id === id) === false) {
      console.log("first conditional works");
      console.log(this.state.available);
      
      this.setState({
        characters,
        count: 0
      });

      this.empty(id);

      this.shuffle(this.state.characters);
      
    } else if (this.state.available.length < 1) {
      console.log("second conditional works")
      this.handleScoreChange();
      // console.log(this.state.available)

      const available = this.state.characters.filter(character => character.id !== id);

      this.setState({ available })

      console.log(available);

      this.shuffle(this.state.characters)

    } else if (this.state.available.some(character => character.id === id) === true) {
      
      console.log("third conditional works")

      this.handleScoreChange();
      // console.log(this.state.available)

      const available = this.state.available.filter(character => character.id !== id);

      this.setState({ available })

      console.log(available);

      this.shuffle(this.state.characters)

    }
  }


  handleScoreChange = event => {

    this.setState({count: this.state.count + 1})

  }
  // Map over the characters array and create a new memory card for each of them
  render() {
    return (
        <Container>
          <Row>
            <Col xs={12}>
              <Title>
                Stranger Things 3 Memory Game
              </Title>
            </Col>
            <Col xs={12} className="text-center">
              <Counter
               count = {this.state.count}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <Wrapper>
              {
                this.state.characters.map(character => (
                  <MemoryCard
                    chooseCharacter={this.chooseCharacter}
                    id={character.id}
                    key={character.id}
                    image={character.image}
                    name={character.name}
                  />
                ))
              }
              </Wrapper>
            </Col>
          </Row>
        </Container>
    )
  }
}

export default App;

