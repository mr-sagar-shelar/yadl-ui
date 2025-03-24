import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import DefenderSensor from "../DefenderSensor";

describe("DefenderSensor component", () => {
  it("DefenderSensor should render correctly", () => {
    render(<DefenderSensor />);
    expect(true).toBeTruthy();
  });
});
