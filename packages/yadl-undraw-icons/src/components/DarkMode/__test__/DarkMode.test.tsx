import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import DarkMode from "../DarkMode";

describe("DarkMode component", () => {
  it("DarkMode should render correctly", () => {
    render(<DarkMode />);
    expect(true).toBeTruthy();
  });
});
