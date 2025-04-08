import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import AzureDevOps from "../AzureDevOps";

describe("AzureDevOps component", () => {
  it("AzureDevOps should render correctly", () => {
    render(<AzureDevOps />);
    expect(true).toBeTruthy();
  });
});
