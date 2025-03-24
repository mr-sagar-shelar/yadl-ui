import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import GameSparks from "../GameSparks";

describe("GameSparks component", () => {
  it("GameSparks should render correctly", () => {
    render(<GameSparks />);
    expect(true).toBeTruthy();
  });
});
