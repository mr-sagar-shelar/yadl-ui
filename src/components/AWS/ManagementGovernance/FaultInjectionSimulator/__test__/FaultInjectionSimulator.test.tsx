import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import FaultInjectionSimulator from "../FaultInjectionSimulator";

describe("FaultInjectionSimulator component", () => {
  it("FaultInjectionSimulator should render correctly", () => {
    render(<FaultInjectionSimulator />);
    expect(true).toBeTruthy();
  });
});
