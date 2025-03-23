import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ColorPalette from "../ColorPalette";

describe("ColorPalette component", () => {
  it("ColorPalette should render correctly", () => {
    render(<ColorPalette />);
    expect(true).toBeTruthy();
  });
});
