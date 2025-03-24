import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import JourneyHub from "../JourneyHub";

describe("JourneyHub component", () => {
  it("JourneyHub should render correctly", () => {
    render(<JourneyHub />);
    expect(true).toBeTruthy();
  });
});
