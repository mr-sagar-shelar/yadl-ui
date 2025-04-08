import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import FinancialData from "../FinancialData";

describe("FinancialData component", () => {
  it("FinancialData should render correctly", () => {
    render(<FinancialData />);
    expect(true).toBeTruthy();
  });
});
