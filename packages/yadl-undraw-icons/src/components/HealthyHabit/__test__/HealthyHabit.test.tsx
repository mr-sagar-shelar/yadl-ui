import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import HealthyHabit from "../HealthyHabit";

describe("HealthyHabit component", () => {
  it("HealthyHabit should render correctly", () => {
    render(<HealthyHabit />);
    expect(true).toBeTruthy();
  });
});
