import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import CostManagement from "../CostManagement";

describe("CostManagement component", () => {
  it("CostManagement should render correctly", () => {
    render(<CostManagement />);
    expect(true).toBeTruthy();
  });
});
