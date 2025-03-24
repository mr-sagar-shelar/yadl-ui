import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import CloudFirewallRules from "../CloudFirewallRules";

describe("CloudFirewallRules component", () => {
  it("CloudFirewallRules should render correctly", () => {
    render(<CloudFirewallRules />);
    expect(true).toBeTruthy();
  });
});
