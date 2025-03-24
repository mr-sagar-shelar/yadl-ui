import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import TimeSeriesInsightsEnvironments from "../TimeSeriesInsightsEnvironments";

describe("TimeSeriesInsightsEnvironments component", () => {
  it("TimeSeriesInsightsEnvironments should render correctly", () => {
    render(<TimeSeriesInsightsEnvironments />);
    expect(true).toBeTruthy();
  });
});
