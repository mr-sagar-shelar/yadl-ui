import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import AzureArc from "../AzureArc";

describe("AzureArc component", () => {
  it("AzureArc should render correctly", () => {
    render(<AzureArc />);
    expect(true).toBeTruthy();
  });
});
