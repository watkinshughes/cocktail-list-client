import React from "react";
import ReactDOM from "react-dom";
import { create } from "react-test-renderer";
import AddCocktail from "../components/AddCocktail";

test("snapsot", () => {
  const c = create(<AddCocktail />);
  expect(c.toJSON()).toMatchSnapshot();
});

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<AddCocktail />, div);
  ReactDOM.unmountComponentAtNode(div);
});
