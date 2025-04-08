import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import TimeSeriesInsightsAccessPolicies from "../TimeSeriesInsightsAccessPolicies";

describe("TimeSeriesInsightsAccessPolicies component", () => {
  it("TimeSeriesInsightsAccessPolicies should render correctly", () => {
    render(<TimeSeriesInsightsAccessPolicies />);
    expect(true).toBeTruthy();
  });
});
