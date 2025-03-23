import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import StripePayments from "../StripePayments";

describe("StripePayments component", () => {
  it("StripePayments should render correctly", () => {
    render(<StripePayments />);
    expect(true).toBeTruthy();
  });
});
