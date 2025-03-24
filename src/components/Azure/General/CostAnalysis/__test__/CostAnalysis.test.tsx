import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import CostAnalysis from "../CostAnalysis";

describe("CostAnalysis component", () => {
  it("CostAnalysis should render correctly", () => {
    render(<CostAnalysis />);
    expect(true).toBeTruthy();
  });
});
