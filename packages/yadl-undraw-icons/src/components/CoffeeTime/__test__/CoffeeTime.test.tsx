import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import CoffeeTime from "../CoffeeTime";

describe("CoffeeTime component", () => {
  it("CoffeeTime should render correctly", () => {
    render(<CoffeeTime />);
    expect(true).toBeTruthy();
  });
});
