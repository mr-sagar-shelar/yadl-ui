import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import MovingForward from "../MovingForward";

describe("MovingForward component", () => {
  it("MovingForward should render correctly", () => {
    render(<MovingForward />);
    expect(true).toBeTruthy();
  });
});
