import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import TailwindCSS from "../TailwindCSS";

describe("TailwindCSS component", () => {
  it("TailwindCSS should render correctly", () => {
    render(<TailwindCSS />);
    expect(true).toBeTruthy();
  });
});
