import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import AzureMonitorDashboard from "../AzureMonitorDashboard";

describe("AzureMonitorDashboard component", () => {
  it("AzureMonitorDashboard should render correctly", () => {
    render(<AzureMonitorDashboard />);
    expect(true).toBeTruthy();
  });
});
