import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import AzureNetworkFunctionManagerFunctions from "../AzureNetworkFunctionManagerFunctions";

describe("AzureNetworkFunctionManagerFunctions component", () => {
  it("AzureNetworkFunctionManagerFunctions should render correctly", () => {
    render(<AzureNetworkFunctionManagerFunctions />);
    expect(true).toBeTruthy();
  });
});
