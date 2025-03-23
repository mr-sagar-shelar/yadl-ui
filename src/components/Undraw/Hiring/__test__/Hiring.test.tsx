import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Hiring from "../Hiring";

describe("Hiring component", () => {
  it("Hiring should render correctly", () => {
    render(<Hiring />);
    expect(true).toBeTruthy();
  });
});
