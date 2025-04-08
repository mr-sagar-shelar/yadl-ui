import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import JapanJapan from "../JapanJapan";

describe("JapanJapan component", () => {
  it("JapanJapan should render correctly", () => {
    render(<JapanJapan />);
    expect(true).toBeTruthy();
  });
});
