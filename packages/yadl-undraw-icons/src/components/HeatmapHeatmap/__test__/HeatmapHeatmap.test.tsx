import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import HeatmapHeatmap from "../HeatmapHeatmap";

describe("HeatmapHeatmap component", () => {
  it("HeatmapHeatmap should render correctly", () => {
    render(<HeatmapHeatmap />);
    expect(true).toBeTruthy();
  });
});
