import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import SupplyChain from "../SupplyChain";

describe("SupplyChain component", () => {
  it("SupplyChain should render correctly", () => {
    render(<SupplyChain />);
    expect(true).toBeTruthy();
  });
});
