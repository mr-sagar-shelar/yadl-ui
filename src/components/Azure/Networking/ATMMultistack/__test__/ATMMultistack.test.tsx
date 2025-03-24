import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ATMMultistack from "../ATMMultistack";

describe("ATMMultistack component", () => {
  it("ATMMultistack should render correctly", () => {
    render(<ATMMultistack />);
    expect(true).toBeTruthy();
  });
});
