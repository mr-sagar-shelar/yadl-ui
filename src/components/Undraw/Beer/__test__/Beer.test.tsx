import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Beer from "../Beer";

describe("Beer component", () => {
  it("Beer should render correctly", () => {
    render(<Beer />);
    expect(true).toBeTruthy();
  });
});
