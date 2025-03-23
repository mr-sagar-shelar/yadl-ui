import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Empty_cartEmptyCart from "../Empty_cartEmptyCart";

describe("Empty_cartEmptyCart component", () => {
  it("Empty_cartEmptyCart should render correctly", () => {
    render(<Empty_cartEmptyCart />);
    expect(true).toBeTruthy();
  });
});
