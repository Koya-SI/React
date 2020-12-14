import React from "react";
import ReactDOM from "react-dom";
import Square from "./../square";
import renderer from "react-test-renderer";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Square></Square>, div);
});

it("matches snapshot", () => {
  const tree = renderer.create(<Square></Square>).toJSON();
  expect(tree).toMatchSnapshot();
});
