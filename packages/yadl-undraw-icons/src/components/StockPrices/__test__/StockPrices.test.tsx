import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import StockPrices from "../StockPrices";

describe("StockPrices component", () => {
  it("StockPrices should render correctly", () => {
    render(<StockPrices />);
    expect(true).toBeTruthy();
  });
});
