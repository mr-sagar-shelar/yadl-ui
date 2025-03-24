import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import AzureNetworkFunctionManager from "../AzureNetworkFunctionManager";

describe("AzureNetworkFunctionManager component", () => {
  it("AzureNetworkFunctionManager should render correctly", () => {
    render(<AzureNetworkFunctionManager />);
    expect(true).toBeTruthy();
  });
});
