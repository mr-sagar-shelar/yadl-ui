import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import PerformanceOverview from "../PerformanceOverview";

describe("PerformanceOverview component", () => {
  it("PerformanceOverview should render correctly", () => {
    render(<PerformanceOverview />);
    expect(true).toBeTruthy();
  });
});
