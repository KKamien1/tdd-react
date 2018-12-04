import React from "react";
import "../setupTest";

import { shallow } from "enzyme";

import { Wallet } from "./Wallet";
import connected from "./Wallet";

const unconnected = connected.WrappedComponent;

describe("Wallet", () => {
  const props = { balance: 20 };
  const wallet = shallow(<Wallet {...props} />);

  it("render properly", () => {
    expect(wallet).toMatchSnapshot();
  });
  it("displays the balance from prpos", () => {
    expect(wallet.find(".balance").text()).toEqual("20");
  });
});
