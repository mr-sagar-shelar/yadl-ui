import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import FlowersFlowers from "../FlowersFlowers";

describe("FlowersFlowers component", () => {
  it("FlowersFlowers should render correctly", () => {
    render(<FlowersFlowers />);
    expect(true).toBeTruthy();
  });
});
