import React from "react";
import MovieCard from "../components/MovieCard";
import "@testing-library/jest-dom";
import { render } from "react-testing-library";

const movieData = {
  name: "Movie Name",
  id: 12,
  releaseDate: "12-10-2022",
  image: "/sdsd",
  onclick: () => null,
};

//test block
test("renders without crashing", () => {
  const div = document.createElement("div");
  render(<p>HEHE</p>, div);
  // render the component on virtual dom
});
