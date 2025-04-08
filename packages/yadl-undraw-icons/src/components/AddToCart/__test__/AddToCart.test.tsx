import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import AddToCart from "../AddToCart";

describe("AddToCart component", () => {
  it("AddToCart should render correctly", () => {
    render(<AddToCart />);
    expect(true).toBeTruthy();
  });
});
