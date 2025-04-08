import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import DarkAlleyDarkAlley from "../DarkAlleyDarkAlley";

describe("DarkAlleyDarkAlley component", () => {
  it("DarkAlleyDarkAlley should render correctly", () => {
    render(<DarkAlleyDarkAlley />);
    expect(true).toBeTruthy();
  });
});
