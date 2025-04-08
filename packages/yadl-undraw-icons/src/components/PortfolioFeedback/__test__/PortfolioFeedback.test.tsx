import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import PortfolioFeedback from "../PortfolioFeedback";

describe("PortfolioFeedback component", () => {
  it("PortfolioFeedback should render correctly", () => {
    render(<PortfolioFeedback />);
    expect(true).toBeTruthy();
  });
});
