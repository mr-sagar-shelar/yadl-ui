import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Fitness_statsFitnessStats from "../Fitness_statsFitnessStats";

describe("Fitness_statsFitnessStats component", () => {
  it("Fitness_statsFitnessStats should render correctly", () => {
    render(<Fitness_statsFitnessStats />);
    expect(true).toBeTruthy();
  });
});
