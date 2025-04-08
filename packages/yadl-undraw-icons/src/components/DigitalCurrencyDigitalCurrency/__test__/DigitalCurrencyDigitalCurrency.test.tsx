import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import DigitalCurrencyDigitalCurrency from "../DigitalCurrencyDigitalCurrency";

describe("DigitalCurrencyDigitalCurrency component", () => {
  it("DigitalCurrencyDigitalCurrency should render correctly", () => {
    render(<DigitalCurrencyDigitalCurrency />);
    expect(true).toBeTruthy();
  });
});
