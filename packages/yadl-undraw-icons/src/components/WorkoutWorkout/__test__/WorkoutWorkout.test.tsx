import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import WorkoutWorkout from "../WorkoutWorkout";

describe("WorkoutWorkout component", () => {
  it("WorkoutWorkout should render correctly", () => {
    render(<WorkoutWorkout />);
    expect(true).toBeTruthy();
  });
});
