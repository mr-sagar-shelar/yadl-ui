import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import InvestmentData from "../InvestmentData";

describe("InvestmentData component", () => {
  it("InvestmentData should render correctly", () => {
    render(<InvestmentData />);
    expect(true).toBeTruthy();
  });
});
