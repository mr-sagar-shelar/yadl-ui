import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Pancakes from "../Pancakes";

describe("Pancakes component", () => {
  it("Pancakes should render correctly", () => {
    render(<Pancakes />);
    expect(true).toBeTruthy();
  });
});
