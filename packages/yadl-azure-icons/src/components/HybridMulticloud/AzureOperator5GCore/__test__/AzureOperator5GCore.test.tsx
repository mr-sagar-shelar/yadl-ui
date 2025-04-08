import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import AzureOperator5GCore from "../AzureOperator5GCore";

describe("AzureOperator5GCore component", () => {
  it("AzureOperator5GCore should render correctly", () => {
    render(<AzureOperator5GCore />);
    expect(true).toBeTruthy();
  });
});
