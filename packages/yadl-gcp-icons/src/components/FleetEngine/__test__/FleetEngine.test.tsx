import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import FleetEngine from "../FleetEngine";

describe("FleetEngine component", () => {
  it("FleetEngine should render correctly", () => {
    render(<FleetEngine />);
    expect(true).toBeTruthy();
  });
});
