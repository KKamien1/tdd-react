import React, { Component } from "react";
import { connect } from "react-redux";
import { deposit, withdraw } from "../actions/actions";

export class Wallet extends Component {
  constructor(props) {
    super(props);

    this.state = {
      balance: 0
    };
  }

  updateBalance = event => {
    this.setState({ balance: parseInt(event.target.value, 10) });
  };
  deposit = () => this.props.deposit(this.state.balance);
  withdraw = () => this.props.withdraw(this.state.balance);

  render() {
    return (
      <div>
        <h3>
          Wallet balance: <span className="balance">{this.props.balance}</span>
        </h3>
        <input
          type="text"
          className="input-wallet"
          onChange={this.updateBalance}
        />
        <button className="btn-deposit" onClick={this.deposit}>
          Deposit
        </button>
        <button className="btn-withdraw" onClick={this.withdraw}>
          Withdraw
        </button>
      </div>
    );
  }
}

export default connect(
  state => ({
    balance: state.balance
  }),
  { deposit, withdraw }
)(Wallet);
