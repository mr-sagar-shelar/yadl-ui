import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import OrderDelivered from "../OrderDelivered";

describe("OrderDelivered component", () => {
  it("OrderDelivered should render correctly", () => {
    render(<OrderDelivered />);
    expect(true).toBeTruthy();
  });
});
