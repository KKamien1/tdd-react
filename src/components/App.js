import React, { Component } from "react";
import Wallet from "./Wallet";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Lootcheck</h1>

        <Wallet />
      </div>
    );
  }
}

export default App;
