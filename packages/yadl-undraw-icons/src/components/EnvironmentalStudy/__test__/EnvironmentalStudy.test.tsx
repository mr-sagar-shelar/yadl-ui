import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import EnvironmentalStudy from "../EnvironmentalStudy";

describe("EnvironmentalStudy component", () => {
  it("EnvironmentalStudy should render correctly", () => {
    render(<EnvironmentalStudy />);
    expect(true).toBeTruthy();
  });
});
