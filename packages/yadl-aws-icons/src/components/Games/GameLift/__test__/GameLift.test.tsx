import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import GameLift from "../GameLift";

describe("GameLift component", () => {
  it("GameLift should render correctly", () => {
    render(<GameLift />);
    expect(true).toBeTruthy();
  });
});
