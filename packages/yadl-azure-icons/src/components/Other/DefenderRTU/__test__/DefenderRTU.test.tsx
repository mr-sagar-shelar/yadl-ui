import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import DefenderRTU from "../DefenderRTU";

describe("DefenderRTU component", () => {
  it("DefenderRTU should render correctly", () => {
    render(<DefenderRTU />);
    expect(true).toBeTruthy();
  });
});
