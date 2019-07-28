import React, { Component } from "react";
import MemoryCard from "./components/MemoryCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import characters from "./characters.json";
import FriendCard from "./components/MemoryCard";

class App extends Component {

  // Setting this.state.characters to the characters array
  state = {
    characters
  };

  // Map over the characters array and create a new memory card for each of them
  render() {
    return (
      <Wrapper>
        <Title>
          Stranger Things 3 Memory Game
        </Title>
        {this.state.characters.map(character =>(
                  <FriendCard
                  id={characters.id}
                  key={characters.id}
                  image={characters.id}
                />
        ))}
      </Wrapper>
    )
  }
}

export default App;