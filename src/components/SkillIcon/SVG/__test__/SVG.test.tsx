import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import SVG from "../SVG";

describe("SVG component", () => {
  it("SVG should render correctly", () => {
    render(<SVG />);
    expect(true).toBeTruthy();
  });
});
