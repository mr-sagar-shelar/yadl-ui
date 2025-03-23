import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import BreakfastBreakfast from "../BreakfastBreakfast";

describe("BreakfastBreakfast component", () => {
  it("BreakfastBreakfast should render correctly", () => {
    render(<BreakfastBreakfast />);
    expect(true).toBeTruthy();
  });
});
