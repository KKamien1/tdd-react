import React, { Component } from "react";
import { Button } from "react-bootstrap";
import Gift from "./Gift";
import { max_number } from "../helpers";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifts: []
    };
  }

  addGift() {
    const { gifts } = this.state;
    const ids = gifts.map(gift => gift.id);
    let maxId = max_number(ids);
    gifts.push({ id: ++maxId });
    this.setState({ gifts });
  }

  removeGift = id => {
    const { gifts } = this.state;
    console.log(gifts, id);
    const update = gifts.filter(gift => gift.id !== id);
    this.setState({ gifts: update });
  };

  render() {
    return (
      <div>
        <h2>Test</h2>
        <div className="gift-list">
          {this.state.gifts.map(gift => {
            return (
              <Gift key={gift.id} gift={gift} removeGift={this.removeGift} />
            );
            //return <div key={gift.id}>{gift.id}</div>;
          })}
        </div>
        <Button className="btn-add" onClick={this.addGift.bind(this)}>
          Add giftu
        </Button>
      </div>
    );
  }
}

export default App;
