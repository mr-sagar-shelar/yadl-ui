import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import NatureFun from "../NatureFun";

describe("NatureFun component", () => {
  it("NatureFun should render correctly", () => {
    render(<NatureFun />);
    expect(true).toBeTruthy();
  });
});
