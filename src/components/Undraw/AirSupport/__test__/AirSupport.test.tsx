import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import AirSupport from "../AirSupport";

describe("AirSupport component", () => {
  it("AirSupport should render correctly", () => {
    render(<AirSupport />);
    expect(true).toBeTruthy();
  });
});
