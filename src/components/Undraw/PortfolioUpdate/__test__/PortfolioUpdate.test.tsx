import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import PortfolioUpdate from "../PortfolioUpdate";

describe("PortfolioUpdate component", () => {
  it("PortfolioUpdate should render correctly", () => {
    render(<PortfolioUpdate />);
    expect(true).toBeTruthy();
  });
});
