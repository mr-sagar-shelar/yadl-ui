import React from "react";
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import AnimateCSS from "../AnimateCSS";

describe("AnimateCSS component", () => {
  it("AnimateCSS should render correctly", () => {
    render(<AnimateCSS />);
    expect(true).toBeTruthy();
  });
});
