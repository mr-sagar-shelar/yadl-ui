import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Product_photographyProductPhotography from "../Product_photographyProductPhotography";

describe("Product_photographyProductPhotography component", () => {
  it("Product_photographyProductPhotography should render correctly", () => {
    render(<Product_photographyProductPhotography />);
    expect(true).toBeTruthy();
  });
});
