import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ApplicationCostProfiler from "../ApplicationCostProfiler";

describe("ApplicationCostProfiler component", () => {
  it("ApplicationCostProfiler should render correctly", () => {
    render(<ApplicationCostProfiler />);
    expect(true).toBeTruthy();
  });
});
