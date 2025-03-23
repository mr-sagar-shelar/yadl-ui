import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import CreditCardPayment from "../CreditCardPayment";

describe("CreditCardPayment component", () => {
  it("CreditCardPayment should render correctly", () => {
    render(<CreditCardPayment />);
    expect(true).toBeTruthy();
  });
});
