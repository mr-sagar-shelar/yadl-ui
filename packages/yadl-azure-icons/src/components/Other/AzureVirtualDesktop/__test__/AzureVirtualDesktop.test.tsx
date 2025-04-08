import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import AzureVirtualDesktop from "../AzureVirtualDesktop";

describe("AzureVirtualDesktop component", () => {
  it("AzureVirtualDesktop should render correctly", () => {
    render(<AzureVirtualDesktop />);
    expect(true).toBeTruthy();
  });
});
