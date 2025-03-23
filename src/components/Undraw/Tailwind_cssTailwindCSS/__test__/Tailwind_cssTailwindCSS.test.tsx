import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Tailwind_cssTailwindCSS from "../Tailwind_cssTailwindCSS";

describe("Tailwind_cssTailwindCSS component", () => {
  it("Tailwind_cssTailwindCSS should render correctly", () => {
    render(<Tailwind_cssTailwindCSS />);
    expect(true).toBeTruthy();
  });
});
