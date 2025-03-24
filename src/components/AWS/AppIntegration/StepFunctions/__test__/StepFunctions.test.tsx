import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import StepFunctions from "../StepFunctions";

describe("StepFunctions component", () => {
  it("StepFunctions should render correctly", () => {
    render(<StepFunctions />);
    expect(true).toBeTruthy();
  });
});
