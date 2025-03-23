import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ChristmasMode from "../ChristmasMode";

describe("ChristmasMode component", () => {
  it("ChristmasMode should render correctly", () => {
    render(<ChristmasMode />);
    expect(true).toBeTruthy();
  });
});
