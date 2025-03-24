import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import PerformanceDashboard from "../PerformanceDashboard";

describe("PerformanceDashboard component", () => {
  it("PerformanceDashboard should render correctly", () => {
    render(<PerformanceDashboard />);
    expect(true).toBeTruthy();
  });
});
