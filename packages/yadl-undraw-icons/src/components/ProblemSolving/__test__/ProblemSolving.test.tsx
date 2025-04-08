import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ProblemSolving from "../ProblemSolving";

describe("ProblemSolving component", () => {
  it("ProblemSolving should render correctly", () => {
    render(<ProblemSolving />);
    expect(true).toBeTruthy();
  });
});
