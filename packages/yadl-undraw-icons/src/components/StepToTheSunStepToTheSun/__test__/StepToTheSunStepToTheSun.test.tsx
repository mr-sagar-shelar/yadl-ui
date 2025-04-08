import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import StepToTheSunStepToTheSun from "../StepToTheSunStepToTheSun";

describe("StepToTheSunStepToTheSun component", () => {
  it("StepToTheSunStepToTheSun should render correctly", () => {
    render(<StepToTheSunStepToTheSun />);
    expect(true).toBeTruthy();
  });
});
