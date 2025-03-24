import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import AzureEdgeHardwareCenter from "../AzureEdgeHardwareCenter";

describe("AzureEdgeHardwareCenter component", () => {
  it("AzureEdgeHardwareCenter should render correctly", () => {
    render(<AzureEdgeHardwareCenter />);
    expect(true).toBeTruthy();
  });
});
