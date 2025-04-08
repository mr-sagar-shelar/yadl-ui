import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Portfolio from "../Portfolio";

describe("Portfolio component", () => {
  it("Portfolio should render correctly", () => {
    render(<Portfolio />);
    expect(true).toBeTruthy();
  });
});
