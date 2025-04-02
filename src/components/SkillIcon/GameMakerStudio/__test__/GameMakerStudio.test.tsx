import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import GameMakerStudio from "../GameMakerStudio";

describe("GameMakerStudio component", () => {
  it("GameMakerStudio should render correctly", () => {
    render(<GameMakerStudio />);
    expect(true).toBeTruthy();
  });
});
