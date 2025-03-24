import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import AzureOperatorServiceManager from "../AzureOperatorServiceManager";

describe("AzureOperatorServiceManager component", () => {
  it("AzureOperatorServiceManager should render correctly", () => {
    render(<AzureOperatorServiceManager />);
    expect(true).toBeTruthy();
  });
});
