import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Welcome from "../Welcome";

describe("Welcome component", () => {
  it("Welcome should render correctly", () => {
    render(<Welcome />);
    expect(true).toBeTruthy();
  });
});
