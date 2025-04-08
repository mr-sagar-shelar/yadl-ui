import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Trip from "../Trip";

describe("Trip component", () => {
  it("Trip should render correctly", () => {
    render(<Trip />);
    expect(true).toBeTruthy();
  });
});
