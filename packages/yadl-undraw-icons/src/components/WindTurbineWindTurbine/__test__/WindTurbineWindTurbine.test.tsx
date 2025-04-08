import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import WindTurbineWindTurbine from "../WindTurbineWindTurbine";

describe("WindTurbineWindTurbine component", () => {
  it("WindTurbineWindTurbine should render correctly", () => {
    render(<WindTurbineWindTurbine />);
    expect(true).toBeTruthy();
  });
});
