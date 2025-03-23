import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import VideoGames from "../VideoGames";

describe("VideoGames component", () => {
  it("VideoGames should render correctly", () => {
    render(<VideoGames />);
    expect(true).toBeTruthy();
  });
});
