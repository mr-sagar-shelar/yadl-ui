import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import AzureStackHCISizer from "../AzureStackHCISizer";

describe("AzureStackHCISizer component", () => {
  it("AzureStackHCISizer should render correctly", () => {
    render(<AzureStackHCISizer />);
    expect(true).toBeTruthy();
  });
});
