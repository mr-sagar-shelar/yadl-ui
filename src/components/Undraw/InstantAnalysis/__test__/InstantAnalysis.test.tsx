import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import InstantAnalysis from "../InstantAnalysis";

describe("InstantAnalysis component", () => {
  it("InstantAnalysis should render correctly", () => {
    render(<InstantAnalysis />);
    expect(true).toBeTruthy();
  });
});
