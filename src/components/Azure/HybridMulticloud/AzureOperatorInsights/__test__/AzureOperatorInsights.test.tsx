import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import AzureOperatorInsights from "../AzureOperatorInsights";

describe("AzureOperatorInsights component", () => {
  it("AzureOperatorInsights should render correctly", () => {
    render(<AzureOperatorInsights />);
    expect(true).toBeTruthy();
  });
});
