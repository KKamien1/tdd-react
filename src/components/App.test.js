import React from "react";
import Enzyme, { shallow } from "enzyme";

import App from "./App";

const EnzymeAdapter = require("enzyme-adapter-react-16");

// Setup enzyme's react adapter
Enzyme.configure({ adapter: new EnzymeAdapter() });

describe("App", () => {
  const app = shallow(<App />);
  const id = 1;

  it("renders App component correctly", () => {
    expect(app).toMatchSnapshot();
  });

  it("initializes the `state` with empty list with gifts", () => {
    expect(app.state().gifts).toEqual([]);
  });

  describe("when clicking `add button` ", () => {
    beforeEach(() => {
      app.find(".btn-add").simulate("click");
    });

    afterEach(() => {
      app.setState({ gifts: [] });
    });

    it("add a new gift to `state` when clicking the `add gift` button", () => {
      expect(app.state().gifts).toEqual([{ id }]);
    });

    it("adds a new gift to the renderd list when clicking the `add gift` ", () => {
      expect(app.find(".gift-list").children().length).toEqual(1);
    });

    it("creates a Gift component", () => {
      expect(app.find("Gift").exists()).toBe(true);
    });

    console.log(app.debug());
  });

  describe("and the user wants to remove ath added gift", () => {
    beforeEach(() => {
      app.instance().removeGift(id);
    });

    it("removes the gift from `state`", () => {
      expect(app.state().gifts).toEqual([]);
    });
  });
});
