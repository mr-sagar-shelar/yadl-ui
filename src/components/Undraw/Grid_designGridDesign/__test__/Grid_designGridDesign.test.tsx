import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Grid_designGridDesign from "../Grid_designGridDesign";

describe("Grid_designGridDesign component", () => {
  it("Grid_designGridDesign should render correctly", () => {
    render(<Grid_designGridDesign />);
    expect(true).toBeTruthy();
  });
});
