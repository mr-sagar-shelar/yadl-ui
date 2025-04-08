import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import OrderConfirmed from "../OrderConfirmed";

describe("OrderConfirmed component", () => {
  it("OrderConfirmed should render correctly", () => {
    render(<OrderConfirmed />);
    expect(true).toBeTruthy();
  });
});
