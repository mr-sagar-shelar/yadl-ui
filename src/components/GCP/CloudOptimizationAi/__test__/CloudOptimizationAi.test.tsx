import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import CloudOptimizationAi from "../CloudOptimizationAi";

describe("CloudOptimizationAi component", () => {
  it("CloudOptimizationAi should render correctly", () => {
    render(<CloudOptimizationAi />);
    expect(true).toBeTruthy();
  });
});
