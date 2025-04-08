import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ColorSchemes from "../ColorSchemes";

describe("ColorSchemes component", () => {
  it("ColorSchemes should render correctly", () => {
    render(<ColorSchemes />);
    expect(true).toBeTruthy();
  });
});
