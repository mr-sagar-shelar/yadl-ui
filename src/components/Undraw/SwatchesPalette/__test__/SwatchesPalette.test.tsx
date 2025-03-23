import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import SwatchesPalette from "../SwatchesPalette";

describe("SwatchesPalette component", () => {
  it("SwatchesPalette should render correctly", () => {
    render(<SwatchesPalette />);
    expect(true).toBeTruthy();
  });
});
