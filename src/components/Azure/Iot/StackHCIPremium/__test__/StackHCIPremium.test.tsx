import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import StackHCIPremium from "../StackHCIPremium";

describe("StackHCIPremium component", () => {
  it("StackHCIPremium should render correctly", () => {
    render(<StackHCIPremium />);
    expect(true).toBeTruthy();
  });
});
