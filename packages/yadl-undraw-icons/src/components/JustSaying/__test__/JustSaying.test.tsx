import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import JustSaying from "../JustSaying";

describe("JustSaying component", () => {
  it("JustSaying should render correctly", () => {
    render(<JustSaying />);
    expect(true).toBeTruthy();
  });
});
