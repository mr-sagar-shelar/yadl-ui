import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import FatherhoodFatherhood from "../FatherhoodFatherhood";

describe("FatherhoodFatherhood component", () => {
  it("FatherhoodFatherhood should render correctly", () => {
    render(<FatherhoodFatherhood />);
    expect(true).toBeTruthy();
  });
});
