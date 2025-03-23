import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import GettingCoffee from "../GettingCoffee";

describe("GettingCoffee component", () => {
  it("GettingCoffee should render correctly", () => {
    render(<GettingCoffee />);
    expect(true).toBeTruthy();
  });
});
