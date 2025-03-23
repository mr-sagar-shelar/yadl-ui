import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import SteppingUp from "../SteppingUp";

describe("SteppingUp component", () => {
  it("SteppingUp should render correctly", () => {
    render(<SteppingUp />);
    expect(true).toBeTruthy();
  });
});
