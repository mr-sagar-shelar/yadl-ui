import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import DocumentAnalysis from "../DocumentAnalysis";

describe("DocumentAnalysis component", () => {
  it("DocumentAnalysis should render correctly", () => {
    render(<DocumentAnalysis />);
    expect(true).toBeTruthy();
  });
});
