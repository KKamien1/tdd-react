import React from "react";
import "../setupTest";
import { shallow } from "enzyme";
import App from "./App";

describe("App", () => {
  const app = shallow(<App />);

  it("renders without crashing", () => {
    expect(app).toMatchSnapshot();
  });

  it("contains a Wallet component ", () => {
    expect(app.find("Connect(Wallet)").length).toBe(1);
  });

  it("contains a connected Loot component", () => {
    expect(app.find("Connect(Loot)").exists()).toBe(true);
  });

  it("contains a link to the coindesk price page", () => {
    expect(app.find("a").props().href).toBe("http://www.coindesk.com");
  });
});
