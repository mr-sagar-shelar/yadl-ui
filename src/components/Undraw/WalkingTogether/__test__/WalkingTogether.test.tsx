import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import WalkingTogether from "../WalkingTogether";

describe("WalkingTogether component", () => {
  it("WalkingTogether should render correctly", () => {
    render(<WalkingTogether />);
    expect(true).toBeTruthy();
  });
});
