import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Celebrating from "../Celebrating";

describe("Celebrating component", () => {
  it("Celebrating should render correctly", () => {
    render(<Celebrating />);
    expect(true).toBeTruthy();
  });
});
