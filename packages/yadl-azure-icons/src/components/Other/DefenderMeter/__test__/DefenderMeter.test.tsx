import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import DefenderMeter from "../DefenderMeter";

describe("DefenderMeter component", () => {
  it("DefenderMeter should render correctly", () => {
    render(<DefenderMeter />);
    expect(true).toBeTruthy();
  });
});
