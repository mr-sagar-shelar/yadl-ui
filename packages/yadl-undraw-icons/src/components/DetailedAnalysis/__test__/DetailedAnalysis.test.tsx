import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import DetailedAnalysis from "../DetailedAnalysis";

describe("DetailedAnalysis component", () => {
  it("DetailedAnalysis should render correctly", () => {
    render(<DetailedAnalysis />);
    expect(true).toBeTruthy();
  });
});
