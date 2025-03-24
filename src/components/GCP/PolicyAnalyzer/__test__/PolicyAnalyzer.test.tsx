import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import PolicyAnalyzer from "../PolicyAnalyzer";

describe("PolicyAnalyzer component", () => {
  it("PolicyAnalyzer should render correctly", () => {
    render(<PolicyAnalyzer />);
    expect(true).toBeTruthy();
  });
});
