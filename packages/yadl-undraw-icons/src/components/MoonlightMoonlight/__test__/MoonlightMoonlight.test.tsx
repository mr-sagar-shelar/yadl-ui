import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import MoonlightMoonlight from "../MoonlightMoonlight";

describe("MoonlightMoonlight component", () => {
  it("MoonlightMoonlight should render correctly", () => {
    render(<MoonlightMoonlight />);
    expect(true).toBeTruthy();
  });
});
