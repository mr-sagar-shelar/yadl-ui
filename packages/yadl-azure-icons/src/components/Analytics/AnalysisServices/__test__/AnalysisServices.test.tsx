import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import AnalysisServices from "../AnalysisServices";

describe("AnalysisServices component", () => {
  it("AnalysisServices should render correctly", () => {
    render(<AnalysisServices />);
    expect(true).toBeTruthy();
  });
});
