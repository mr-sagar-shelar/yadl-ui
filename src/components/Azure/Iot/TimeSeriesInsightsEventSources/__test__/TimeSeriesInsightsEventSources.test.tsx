import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import TimeSeriesInsightsEventSources from "../TimeSeriesInsightsEventSources";

describe("TimeSeriesInsightsEventSources component", () => {
  it("TimeSeriesInsightsEventSources should render correctly", () => {
    render(<TimeSeriesInsightsEventSources />);
    expect(true).toBeTruthy();
  });
});
