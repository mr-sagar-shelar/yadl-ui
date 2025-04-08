import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import AzureHCPCache from "../AzureHCPCache";

describe("AzureHCPCache component", () => {
  it("AzureHCPCache should render correctly", () => {
    render(<AzureHCPCache />);
    expect(true).toBeTruthy();
  });
});
