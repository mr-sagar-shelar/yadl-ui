import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Home_cinemaHomeCinema from "../Home_cinemaHomeCinema";

describe("Home_cinemaHomeCinema component", () => {
  it("Home_cinemaHomeCinema should render correctly", () => {
    render(<Home_cinemaHomeCinema />);
    expect(true).toBeTruthy();
  });
});
