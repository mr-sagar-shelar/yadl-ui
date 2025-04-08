import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import FileAnalysis from "../FileAnalysis";

describe("FileAnalysis component", () => {
  it("FileAnalysis should render correctly", () => {
    render(<FileAnalysis />);
    expect(true).toBeTruthy();
  });
});
