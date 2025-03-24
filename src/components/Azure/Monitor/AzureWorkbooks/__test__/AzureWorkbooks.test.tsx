import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import AzureWorkbooks from "../AzureWorkbooks";

describe("AzureWorkbooks component", () => {
  it("AzureWorkbooks should render correctly", () => {
    render(<AzureWorkbooks />);
    expect(true).toBeTruthy();
  });
});
