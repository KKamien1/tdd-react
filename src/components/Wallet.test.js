import React from "react";
import "../setupTest";

import { shallow } from "enzyme";

import { Wallet } from "./Wallet";
import connected from "./Wallet";

const unconnected = connected.WrappedComponent;

describe("Wallet", () => {
  const mockDeposit = jest.fn();
  const mockWithdraw = jest.fn();
  const props = { balance: 20, deposit: mockDeposit, withdraw: mockWithdraw };
  const wallet = shallow(<Wallet {...props} />);

  it("render properly", () => {
    expect(wallet).toMatchSnapshot();
  });
  it("displays the balance from prpos", () => {
    expect(wallet.find(".balance").text()).toEqual("20");
  });

  it("create an input to deposit into or withdraw from the balance", () => {
    expect(wallet.find(".input-wallet").exists()).toBe(true);
  });

  describe("when the user types into the waller input", () => {
    const userBalance = 25;

    beforeEach(() => {
      wallet
        .find(".input-wallet")
        .simulate("change", { target: { value: userBalance } });
    });

    it("updates a local wallet balance in `state` and converts to ", () => {
      expect(wallet.state().balance).toEqual(parseInt(userBalance, 10));
    });

    describe("and the user wants to make a deposit", () => {
      beforeEach(() => {
        wallet.find(".btn-deposit").simulate("click");
      });

      it("dispatches the `deposit()` it receives from props with local", () => {
        expect(mockDeposit).toHaveBeenCalledWith(parseInt(userBalance, 10));
      });
    });
    describe("and the user wants to make a withdraw", () => {
      beforeEach(() => {
        wallet.find(".btn-withdraw").simulate("click");
      });
      it("dispatches `the withdraw()` it receives from props with the ", () => {
        expect(mockWithdraw).toHaveBeenCalledWith(parseInt(userBalance, 10));
      });
    });
  });
});
