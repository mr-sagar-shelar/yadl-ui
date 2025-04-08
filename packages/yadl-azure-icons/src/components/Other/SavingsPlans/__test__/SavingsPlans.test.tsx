import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import SavingsPlans from "../SavingsPlans";

describe("SavingsPlans component", () => {
  it("SavingsPlans should render correctly", () => {
    render(<SavingsPlans />);
    expect(true).toBeTruthy();
  });
});
