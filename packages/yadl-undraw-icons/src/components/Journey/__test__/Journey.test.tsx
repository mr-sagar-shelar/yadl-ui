import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Journey from "../Journey";

describe("Journey component", () => {
  it("Journey should render correctly", () => {
    render(<Journey />);
    expect(true).toBeTruthy();
  });
});
