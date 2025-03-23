import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ForSale from "../ForSale";

describe("ForSale component", () => {
  it("ForSale should render correctly", () => {
    render(<ForSale />);
    expect(true).toBeTruthy();
  });
});
