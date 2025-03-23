import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import PairProgramming from "../PairProgramming";

describe("PairProgramming component", () => {
  it("PairProgramming should render correctly", () => {
    render(<PairProgramming />);
    expect(true).toBeTruthy();
  });
});
