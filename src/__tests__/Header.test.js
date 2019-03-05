import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { create } from "react-test-renderer";
import Header from "../components/Header";

test("snapsot", () => {
  const c = create(
    <Router>
      <Header />
    </Router>
  );
  expect(c.toJSON()).toMatchSnapshot();
});

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Router>
      <Header />
    </Router>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
