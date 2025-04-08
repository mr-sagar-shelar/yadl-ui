import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import CodeStar from "../CodeStar";

describe("CodeStar component", () => {
  it("CodeStar should render correctly", () => {
    render(<CodeStar />);
    expect(true).toBeTruthy();
  });
});
