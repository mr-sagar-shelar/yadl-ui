import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import CostExplorer from "../CostExplorer";

describe("CostExplorer component", () => {
  it("CostExplorer should render correctly", () => {
    render(<CostExplorer />);
    expect(true).toBeTruthy();
  });
});
