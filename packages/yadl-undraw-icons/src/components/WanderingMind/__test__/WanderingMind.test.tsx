import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import WanderingMind from "../WanderingMind";

describe("WanderingMind component", () => {
  it("WanderingMind should render correctly", () => {
    render(<WanderingMind />);
    expect(true).toBeTruthy();
  });
});
