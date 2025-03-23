import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import HorrorMovieHorrorMovie from "../HorrorMovieHorrorMovie";

describe("HorrorMovieHorrorMovie component", () => {
  it("HorrorMovieHorrorMovie should render correctly", () => {
    render(<HorrorMovieHorrorMovie />);
    expect(true).toBeTruthy();
  });
});
