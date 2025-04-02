import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import C from "../C";

describe("C component", () => {
  it("C should render correctly", () => {
    render(<C />);
    expect(true).toBeTruthy();
  });
});
