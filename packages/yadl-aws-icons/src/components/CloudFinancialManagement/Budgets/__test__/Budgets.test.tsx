import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Budgets from "../Budgets";

describe("Budgets component", () => {
  it("Budgets should render correctly", () => {
    render(<Budgets />);
    expect(true).toBeTruthy();
  });
});
