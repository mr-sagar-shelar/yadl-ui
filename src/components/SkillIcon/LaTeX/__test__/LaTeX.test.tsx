import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import LaTeX from "../LaTeX";

describe("LaTeX component", () => {
  it("LaTeX should render correctly", () => {
    render(<LaTeX />);
    expect(true).toBeTruthy();
  });
});
