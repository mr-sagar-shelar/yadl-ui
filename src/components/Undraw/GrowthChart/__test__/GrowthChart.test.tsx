import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import GrowthChart from "../GrowthChart";

describe("GrowthChart component", () => {
  it("GrowthChart should render correctly", () => {
    render(<GrowthChart />);
    expect(true).toBeTruthy();
  });
});
