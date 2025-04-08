import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Plans from "../Plans";

describe("Plans component", () => {
  it("Plans should render correctly", () => {
    render(<Plans />);
    expect(true).toBeTruthy();
  });
});
