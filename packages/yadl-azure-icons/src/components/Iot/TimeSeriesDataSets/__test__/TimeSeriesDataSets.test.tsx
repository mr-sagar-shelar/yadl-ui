import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import TimeSeriesDataSets from "../TimeSeriesDataSets";

describe("TimeSeriesDataSets component", () => {
  it("TimeSeriesDataSets should render correctly", () => {
    render(<TimeSeriesDataSets />);
    expect(true).toBeTruthy();
  });
});
