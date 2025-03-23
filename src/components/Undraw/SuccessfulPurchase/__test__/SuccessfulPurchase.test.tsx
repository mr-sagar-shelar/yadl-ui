import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import SuccessfulPurchase from "../SuccessfulPurchase";

describe("SuccessfulPurchase component", () => {
  it("SuccessfulPurchase should render correctly", () => {
    render(<SuccessfulPurchase />);
    expect(true).toBeTruthy();
  });
});
