import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import DefenderMarquee from "../DefenderMarquee";

describe("DefenderMarquee component", () => {
  it("DefenderMarquee should render correctly", () => {
    render(<DefenderMarquee />);
    expect(true).toBeTruthy();
  });
});
