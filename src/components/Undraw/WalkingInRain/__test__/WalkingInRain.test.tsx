import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import WalkingInRain from "../WalkingInRain";

describe("WalkingInRain component", () => {
  it("WalkingInRain should render correctly", () => {
    render(<WalkingInRain />);
    expect(true).toBeTruthy();
  });
});
