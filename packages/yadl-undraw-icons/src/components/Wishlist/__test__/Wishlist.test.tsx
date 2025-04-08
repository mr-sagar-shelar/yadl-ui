import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Wishlist from "../Wishlist";

describe("Wishlist component", () => {
  it("Wishlist should render correctly", () => {
    render(<Wishlist />);
    expect(true).toBeTruthy();
  });
});
