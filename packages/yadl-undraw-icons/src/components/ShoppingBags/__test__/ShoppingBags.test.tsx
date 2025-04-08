import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ShoppingBags from "../ShoppingBags";

describe("ShoppingBags component", () => {
  it("ShoppingBags should render correctly", () => {
    render(<ShoppingBags />);
    expect(true).toBeTruthy();
  });
});
