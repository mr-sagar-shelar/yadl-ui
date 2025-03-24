import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import AzureHPCWorkbenches from "../AzureHPCWorkbenches";

describe("AzureHPCWorkbenches component", () => {
  it("AzureHPCWorkbenches should render correctly", () => {
    render(<AzureHPCWorkbenches />);
    expect(true).toBeTruthy();
  });
});
