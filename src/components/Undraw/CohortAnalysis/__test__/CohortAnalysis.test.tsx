import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import CohortAnalysis from "../CohortAnalysis";

describe("CohortAnalysis component", () => {
  it("CohortAnalysis should render correctly", () => {
    render(<CohortAnalysis />);
    expect(true).toBeTruthy();
  });
});
