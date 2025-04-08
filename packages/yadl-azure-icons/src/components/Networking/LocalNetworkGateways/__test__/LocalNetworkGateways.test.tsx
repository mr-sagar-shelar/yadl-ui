import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import LocalNetworkGateways from "../LocalNetworkGateways";

describe("LocalNetworkGateways component", () => {
  it("LocalNetworkGateways should render correctly", () => {
    render(<LocalNetworkGateways />);
    expect(true).toBeTruthy();
  });
});
