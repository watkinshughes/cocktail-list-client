import React from "react";
import ReactDOM from "react-dom";
import { create } from "react-test-renderer";
import CocktailDetails from "../components/CocktailDetails";

const match = {
  params: {
    id: '12345'
  }
}

test("snapsot", () => {
  const c = create(<CocktailDetails match={match}/>);
  expect(c.toJSON()).toMatchSnapshot();
});

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<CocktailDetails match={match}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
