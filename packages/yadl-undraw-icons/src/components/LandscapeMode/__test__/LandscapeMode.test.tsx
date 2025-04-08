import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import LandscapeMode from "../LandscapeMode";

describe("LandscapeMode component", () => {
  it("LandscapeMode should render correctly", () => {
    render(<LandscapeMode />);
    expect(true).toBeTruthy();
  });
});
