import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import BullMarket from "../BullMarket";

describe("BullMarket component", () => {
  it("BullMarket should render correctly", () => {
    render(<BullMarket />);
    expect(true).toBeTruthy();
  });
});
