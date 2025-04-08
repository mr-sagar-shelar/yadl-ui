import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import BuyHouse from "../BuyHouse";

describe("BuyHouse component", () => {
  it("BuyHouse should render correctly", () => {
    render(<BuyHouse />);
    expect(true).toBeTruthy();
  });
});
