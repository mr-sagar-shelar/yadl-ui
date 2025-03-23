import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import GameWorld from "../GameWorld";

describe("GameWorld component", () => {
  it("GameWorld should render correctly", () => {
    render(<GameWorld />);
    expect(true).toBeTruthy();
  });
});
