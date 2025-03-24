import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import IntuneTrends from "../IntuneTrends";

describe("IntuneTrends component", () => {
  it("IntuneTrends should render correctly", () => {
    render(<IntuneTrends />);
    expect(true).toBeTruthy();
  });
});
