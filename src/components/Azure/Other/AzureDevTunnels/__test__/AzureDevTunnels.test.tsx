import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import AzureDevTunnels from "../AzureDevTunnels";

describe("AzureDevTunnels component", () => {
  it("AzureDevTunnels should render correctly", () => {
    render(<AzureDevTunnels />);
    expect(true).toBeTruthy();
  });
});
