import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import OrderFlowers from "../OrderFlowers";

describe("OrderFlowers component", () => {
  it("OrderFlowers should render correctly", () => {
    render(<OrderFlowers />);
    expect(true).toBeTruthy();
  });
});
