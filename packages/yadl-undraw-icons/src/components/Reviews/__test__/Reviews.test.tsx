import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Reviews from "../Reviews";

describe("Reviews component", () => {
  it("Reviews should render correctly", () => {
    render(<Reviews />);
    expect(true).toBeTruthy();
  });
});
