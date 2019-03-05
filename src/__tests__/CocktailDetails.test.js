import React from "react";
import ReactDOM from "react-dom";
import CocktailDetails from "../components/CocktailDetails";

const match = {
  params: {
    id: '12345'
  }
}

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<CocktailDetails match={match}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
