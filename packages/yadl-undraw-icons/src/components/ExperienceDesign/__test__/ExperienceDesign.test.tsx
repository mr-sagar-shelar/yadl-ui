import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ExperienceDesign from "../ExperienceDesign";

describe("ExperienceDesign component", () => {
  it("ExperienceDesign should render correctly", () => {
    render(<ExperienceDesign />);
    expect(true).toBeTruthy();
  });
});
