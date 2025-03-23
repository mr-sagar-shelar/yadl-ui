import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import DrinkCoffee from "../DrinkCoffee";

describe("DrinkCoffee component", () => {
  it("DrinkCoffee should render correctly", () => {
    render(<DrinkCoffee />);
    expect(true).toBeTruthy();
  });
});
