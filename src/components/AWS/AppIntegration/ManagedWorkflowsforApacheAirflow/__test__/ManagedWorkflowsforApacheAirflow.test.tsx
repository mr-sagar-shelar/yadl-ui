import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ManagedWorkflowsforApacheAirflow from "../ManagedWorkflowsforApacheAirflow";

describe("ManagedWorkflowsforApacheAirflow component", () => {
  it("ManagedWorkflowsforApacheAirflow should render correctly", () => {
    render(<ManagedWorkflowsforApacheAirflow />);
    expect(true).toBeTruthy();
  });
});
