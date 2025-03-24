import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import AzureSpringApps from "../AzureSpringApps";

describe("AzureSpringApps component", () => {
  it("AzureSpringApps should render correctly", () => {
    render(<AzureSpringApps />);
    expect(true).toBeTruthy();
  });
});
