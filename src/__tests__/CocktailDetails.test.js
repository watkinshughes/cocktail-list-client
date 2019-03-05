import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { create } from "react-test-renderer";
import CocktailDetails from "../components/CocktailDetails";

const match = {
  params: {
    id: "12345"
  }
};

test("snapsot", () => {
  const c = create(
    <Router>
      <CocktailDetails match={match} />
    </Router>
  );
  expect(c.toJSON()).toMatchSnapshot();
});

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Router>
      <CocktailDetails match={match} />
    </Router>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
