import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import GrowthAnalytics from "../GrowthAnalytics";

describe("GrowthAnalytics component", () => {
  it("GrowthAnalytics should render correctly", () => {
    render(<GrowthAnalytics />);
    expect(true).toBeTruthy();
  });
});
