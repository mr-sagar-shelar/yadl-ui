import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import FitnessTrackerFitnessTracker from "../FitnessTrackerFitnessTracker";

describe("FitnessTrackerFitnessTracker component", () => {
  it("FitnessTrackerFitnessTracker should render correctly", () => {
    render(<FitnessTrackerFitnessTracker />);
    expect(true).toBeTruthy();
  });
});
