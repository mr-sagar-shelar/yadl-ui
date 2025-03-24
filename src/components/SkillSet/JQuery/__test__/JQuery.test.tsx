import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import JQuery from "../JQuery";

describe("JQuery component", () => {
  it("JQuery should render correctly", () => {
    render(<JQuery />);
    expect(true).toBeTruthy();
  });
});
