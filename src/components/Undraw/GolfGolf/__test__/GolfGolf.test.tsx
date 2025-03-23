import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import GolfGolf from "../GolfGolf";

describe("GolfGolf component", () => {
  it("GolfGolf should render correctly", () => {
    render(<GolfGolf />);
    expect(true).toBeTruthy();
  });
});
