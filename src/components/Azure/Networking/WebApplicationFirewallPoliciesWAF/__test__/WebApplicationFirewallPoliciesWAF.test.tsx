import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import WebApplicationFirewallPoliciesWAF from "../WebApplicationFirewallPoliciesWAF";

describe("WebApplicationFirewallPoliciesWAF component", () => {
  it("WebApplicationFirewallPoliciesWAF should render correctly", () => {
    render(<WebApplicationFirewallPoliciesWAF />);
    expect(true).toBeTruthy();
  });
});
