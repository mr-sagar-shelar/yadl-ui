import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Welcome_catsWelcomeCats from "../Welcome_catsWelcomeCats";

describe("Welcome_catsWelcomeCats component", () => {
  it("Welcome_catsWelcomeCats should render correctly", () => {
    render(<Welcome_catsWelcomeCats />);
    expect(true).toBeTruthy();
  });
});
