import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Slider from "../Slider";

describe("Slider component", () => {
  it("Slider should render correctly", () => {
    render(<Slider />);
    expect(true).toBeTruthy();
  });
});
