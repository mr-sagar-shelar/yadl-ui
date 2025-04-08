import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import WalkingOutside from "../WalkingOutside";

describe("WalkingOutside component", () => {
  it("WalkingOutside should render correctly", () => {
    render(<WalkingOutside />);
    expect(true).toBeTruthy();
  });
});
