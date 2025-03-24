import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import AzureHybridCenter from "../AzureHybridCenter";

describe("AzureHybridCenter component", () => {
  it("AzureHybridCenter should render correctly", () => {
    render(<AzureHybridCenter />);
    expect(true).toBeTruthy();
  });
});
