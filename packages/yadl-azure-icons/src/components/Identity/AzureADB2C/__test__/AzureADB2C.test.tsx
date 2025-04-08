import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import AzureADB2C from "../AzureADB2C";

describe("AzureADB2C component", () => {
  it("AzureADB2C should render correctly", () => {
    render(<AzureADB2C />);
    expect(true).toBeTruthy();
  });
});
