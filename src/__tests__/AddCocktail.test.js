import React from "react";
import ReactDOM from "react-dom";
import AddCocktail from "../components/AddCocktail";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<AddCocktail />, div);
  ReactDOM.unmountComponentAtNode(div);
});
