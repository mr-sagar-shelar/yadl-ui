import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import DefenderFreezerMonitor from "../DefenderFreezerMonitor";

describe("DefenderFreezerMonitor component", () => {
  it("DefenderFreezerMonitor should render correctly", () => {
    render(<DefenderFreezerMonitor />);
    expect(true).toBeTruthy();
  });
});
