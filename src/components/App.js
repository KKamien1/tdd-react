import React from "react";
import Wallet from "./Wallet";
import Loot from "./Loot";

const App = () => {
  return (
    <div className="App">
      <h1>Lootcheck</h1>
      <Wallet />
      <hr />
      <Loot />
      <div>
        <a href="http://www.coindesk.com" target="_blank">
          Coindesk
        </a>
      </div>
    </div>
  );
};

export default App;
