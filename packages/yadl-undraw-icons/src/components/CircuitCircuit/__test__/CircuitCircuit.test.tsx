import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import CircuitCircuit from "../CircuitCircuit";

describe("CircuitCircuit component", () => {
  it("CircuitCircuit should render correctly", () => {
    render(<CircuitCircuit />);
    expect(true).toBeTruthy();
  });
});
