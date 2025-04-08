import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import AzureSQLEdge from "../AzureSQLEdge";

describe("AzureSQLEdge component", () => {
  it("AzureSQLEdge should render correctly", () => {
    render(<AzureSQLEdge />);
    expect(true).toBeTruthy();
  });
});
