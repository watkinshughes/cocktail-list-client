import React from "react";
import ReactDOM from "react-dom";
import { create } from "react-test-renderer";
import CocktailList from "../components/CocktailList";

test("snapsot", () => {
  const c = create(<CocktailList />);
  expect(c.toJSON()).toMatchSnapshot();
});

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<CocktailList />, div);
  ReactDOM.unmountComponentAtNode(div);
});
