import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ApplicationGateways from "../ApplicationGateways";

describe("ApplicationGateways component", () => {
  it("ApplicationGateways should render correctly", () => {
    render(<ApplicationGateways />);
    expect(true).toBeTruthy();
  });
});
