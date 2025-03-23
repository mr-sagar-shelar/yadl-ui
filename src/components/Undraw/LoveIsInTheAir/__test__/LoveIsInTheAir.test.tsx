import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import LoveIsInTheAir from "../LoveIsInTheAir";

describe("LoveIsInTheAir component", () => {
  it("LoveIsInTheAir should render correctly", () => {
    render(<LoveIsInTheAir />);
    expect(true).toBeTruthy();
  });
});
