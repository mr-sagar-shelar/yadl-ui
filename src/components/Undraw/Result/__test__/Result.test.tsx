import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Result from "../Result";

describe("Result component", () => {
  it("Result should render correctly", () => {
    render(<Result />);
    expect(true).toBeTruthy();
  });
});
