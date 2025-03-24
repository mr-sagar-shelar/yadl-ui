import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import CostBudgets from "../CostBudgets";

describe("CostBudgets component", () => {
  it("CostBudgets should render correctly", () => {
    render(<CostBudgets />);
    expect(true).toBeTruthy();
  });
});
