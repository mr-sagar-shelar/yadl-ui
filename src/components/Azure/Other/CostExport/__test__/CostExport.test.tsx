import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import CostExport from "../CostExport";

describe("CostExport component", () => {
  it("CostExport should render correctly", () => {
    render(<CostExport />);
    expect(true).toBeTruthy();
  });
});
