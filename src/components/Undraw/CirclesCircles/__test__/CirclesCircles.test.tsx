import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import CirclesCircles from "../CirclesCircles";

describe("CirclesCircles component", () => {
  it("CirclesCircles should render correctly", () => {
    render(<CirclesCircles />);
    expect(true).toBeTruthy();
  });
});
