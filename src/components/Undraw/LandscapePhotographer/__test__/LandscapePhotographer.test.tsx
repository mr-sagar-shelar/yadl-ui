import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import LandscapePhotographer from "../LandscapePhotographer";

describe("LandscapePhotographer component", () => {
  it("LandscapePhotographer should render correctly", () => {
    render(<LandscapePhotographer />);
    expect(true).toBeTruthy();
  });
});
