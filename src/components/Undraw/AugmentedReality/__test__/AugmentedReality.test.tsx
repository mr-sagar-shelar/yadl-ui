import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import AugmentedReality from "../AugmentedReality";

describe("AugmentedReality component", () => {
  it("AugmentedReality should render correctly", () => {
    render(<AugmentedReality />);
    expect(true).toBeTruthy();
  });
});
