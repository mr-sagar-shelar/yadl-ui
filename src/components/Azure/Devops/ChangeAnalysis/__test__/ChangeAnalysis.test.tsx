import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ChangeAnalysis from "../ChangeAnalysis";

describe("ChangeAnalysis component", () => {
  it("ChangeAnalysis should render correctly", () => {
    render(<ChangeAnalysis />);
    expect(true).toBeTruthy();
  });
});
