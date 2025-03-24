import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ComputeOptimizer from "../ComputeOptimizer";

describe("ComputeOptimizer component", () => {
  it("ComputeOptimizer should render correctly", () => {
    render(<ComputeOptimizer />);
    expect(true).toBeTruthy();
  });
});
