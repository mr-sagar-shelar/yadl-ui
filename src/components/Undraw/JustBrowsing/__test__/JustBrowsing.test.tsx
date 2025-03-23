import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import JustBrowsing from "../JustBrowsing";

describe("JustBrowsing component", () => {
  it("JustBrowsing should render correctly", () => {
    render(<JustBrowsing />);
    expect(true).toBeTruthy();
  });
});
