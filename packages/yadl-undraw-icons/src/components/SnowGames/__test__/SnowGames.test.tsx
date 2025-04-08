import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import SnowGames from "../SnowGames";

describe("SnowGames component", () => {
  it("SnowGames should render correctly", () => {
    render(<SnowGames />);
    expect(true).toBeTruthy();
  });
});
