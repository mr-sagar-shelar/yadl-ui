import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import DefenderHMI from "../DefenderHMI";

describe("DefenderHMI component", () => {
  it("DefenderHMI should render correctly", () => {
    render(<DefenderHMI />);
    expect(true).toBeTruthy();
  });
});
