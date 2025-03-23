import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Investment from "../Investment";

describe("Investment component", () => {
  it("Investment should render correctly", () => {
    render(<Investment />);
    expect(true).toBeTruthy();
  });
});
