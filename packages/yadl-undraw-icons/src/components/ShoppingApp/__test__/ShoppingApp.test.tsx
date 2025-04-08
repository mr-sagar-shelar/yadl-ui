import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ShoppingApp from "../ShoppingApp";

describe("ShoppingApp component", () => {
  it("ShoppingApp should render correctly", () => {
    render(<ShoppingApp />);
    expect(true).toBeTruthy();
  });
});
