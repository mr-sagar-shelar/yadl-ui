import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import VirtualNetworkGateways from "../VirtualNetworkGateways";

describe("VirtualNetworkGateways component", () => {
  it("VirtualNetworkGateways should render correctly", () => {
    render(<VirtualNetworkGateways />);
    expect(true).toBeTruthy();
  });
});
