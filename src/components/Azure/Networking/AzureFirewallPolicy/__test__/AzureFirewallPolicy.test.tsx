import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import AzureFirewallPolicy from "../AzureFirewallPolicy";

describe("AzureFirewallPolicy component", () => {
  it("AzureFirewallPolicy should render correctly", () => {
    render(<AzureFirewallPolicy />);
    expect(true).toBeTruthy();
  });
});
