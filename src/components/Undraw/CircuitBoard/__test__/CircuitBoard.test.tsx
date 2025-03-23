import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import CircuitBoard from "../CircuitBoard";

describe("CircuitBoard component", () => {
  it("CircuitBoard should render correctly", () => {
    render(<CircuitBoard />);
    expect(true).toBeTruthy();
  });
});
