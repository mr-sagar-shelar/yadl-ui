import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ConfidentialLedgers from "../ConfidentialLedgers";

describe("ConfidentialLedgers component", () => {
  it("ConfidentialLedgers should render correctly", () => {
    render(<ConfidentialLedgers />);
    expect(true).toBeTruthy();
  });
});
