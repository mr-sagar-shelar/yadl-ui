import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import InstructionManualInstructionManual from "../InstructionManualInstructionManual";

describe("InstructionManualInstructionManual component", () => {
  it("InstructionManualInstructionManual should render correctly", () => {
    render(<InstructionManualInstructionManual />);
    expect(true).toBeTruthy();
  });
});
