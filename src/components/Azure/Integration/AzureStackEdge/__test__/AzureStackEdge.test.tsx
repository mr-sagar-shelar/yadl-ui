import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import AzureStackEdge from "../AzureStackEdge";

describe("AzureStackEdge component", () => {
  it("AzureStackEdge should render correctly", () => {
    render(<AzureStackEdge />);
    expect(true).toBeTruthy();
  });
});
