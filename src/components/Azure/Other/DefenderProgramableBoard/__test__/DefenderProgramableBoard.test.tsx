import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import DefenderProgramableBoard from "../DefenderProgramableBoard";

describe("DefenderProgramableBoard component", () => {
  it("DefenderProgramableBoard should render correctly", () => {
    render(<DefenderProgramableBoard />);
    expect(true).toBeTruthy();
  });
});
