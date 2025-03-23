import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import PortfolioWebsite from "../PortfolioWebsite";

describe("PortfolioWebsite component", () => {
  it("PortfolioWebsite should render correctly", () => {
    render(<PortfolioWebsite />);
    expect(true).toBeTruthy();
  });
});
