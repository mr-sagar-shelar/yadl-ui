import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import AzureMonitorPipeline from "../AzureMonitorPipeline";

describe("AzureMonitorPipeline component", () => {
  it("AzureMonitorPipeline should render correctly", () => {
    render(<AzureMonitorPipeline />);
    expect(true).toBeTruthy();
  });
});
