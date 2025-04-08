import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Urban_designUrbanDesign from "../Urban_designUrbanDesign";

describe("Urban_designUrbanDesign component", () => {
  it("Urban_designUrbanDesign should render correctly", () => {
    render(<Urban_designUrbanDesign />);
    expect(true).toBeTruthy();
  });
});
