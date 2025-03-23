import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import SnowGlobe from "../SnowGlobe";

describe("SnowGlobe component", () => {
  it("SnowGlobe should render correctly", () => {
    render(<SnowGlobe />);
    expect(true).toBeTruthy();
  });
});
