import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import CostAlerts from "../CostAlerts";

describe("CostAlerts component", () => {
  it("CostAlerts should render correctly", () => {
    render(<CostAlerts />);
    expect(true).toBeTruthy();
  });
});
