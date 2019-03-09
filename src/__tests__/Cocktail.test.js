import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { create } from "react-test-renderer";
import Cocktail from "../components/Cocktail";

const info = {
  id: "12345"
};

test("snapsot", () => {
  const c = create(
    <Router>
      <Cocktail info={info} />
    </Router>
  );
  expect(c.toJSON()).toMatchSnapshot();
});

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Router>
      <Cocktail info={info} />
    </Router>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
