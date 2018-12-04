import React, { Component } from "react";
import { connect } from "react-redux";

export class Wallet extends Component {
  render() {
    return (
      <div>
        <h3>
          Wallet balance: <span className="balance">{this.props.balance}</span>
        </h3>{" "}
      </div>
    );
  }
}

export default connect(state => ({
  balance: state
}))(Wallet);
