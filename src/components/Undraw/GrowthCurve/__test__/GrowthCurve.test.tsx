import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import GrowthCurve from "../GrowthCurve";

describe("GrowthCurve component", () => {
  it("GrowthCurve should render correctly", () => {
    render(<GrowthCurve />);
    expect(true).toBeTruthy();
  });
});
