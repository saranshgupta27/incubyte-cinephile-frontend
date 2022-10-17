import * as React from "react";
import MovieCard from "../components/MovieCard";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

const movieData = {
  name: "Movie Name",
  id: 12,
  releaseDate: "12-10-2022",
  image: "/sdsd",
  onclick: () => null,
};

describe("Movie Card", function () {
  it("should render without crash", function () {
    let container = document.createElement("div");
    document.body.appendChild(container);
    render(<MovieCard {...movieData} />, container);
  });
});

test("should have an image tag", () => {
  render(<MovieCard {...movieData} />);
  expect(screen.getByRole("img")).toBeInTheDocument();
});

test("should have a clickable role", () => {
  render(<MovieCard {...movieData} />);
  expect(screen.getByRole("img")).toBeInTheDocument();
});

test("should render correct movie name", () => {
  render(<MovieCard {...movieData} />);
  expect(screen.getByRole("button")).toHaveTextContent("Movie Name");
});
