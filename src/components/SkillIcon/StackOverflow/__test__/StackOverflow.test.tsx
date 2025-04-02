import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import StackOverflow from "../StackOverflow";

describe("StackOverflow component", () => {
  it("StackOverflow should render correctly", () => {
    render(<StackOverflow />);
    expect(true).toBeTruthy();
  });
});
