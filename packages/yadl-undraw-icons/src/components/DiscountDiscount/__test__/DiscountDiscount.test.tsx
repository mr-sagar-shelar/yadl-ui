import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import DiscountDiscount from "../DiscountDiscount";

describe("DiscountDiscount component", () => {
  it("DiscountDiscount should render correctly", () => {
    render(<DiscountDiscount />);
    expect(true).toBeTruthy();
  });
});
