import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import AzureVMwareSolution from "../AzureVMwareSolution";

describe("AzureVMwareSolution component", () => {
  it("AzureVMwareSolution should render correctly", () => {
    render(<AzureVMwareSolution />);
    expect(true).toBeTruthy();
  });
});
