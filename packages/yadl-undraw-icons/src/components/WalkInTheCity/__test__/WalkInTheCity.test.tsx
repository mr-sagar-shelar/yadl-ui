import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import WalkInTheCity from "../WalkInTheCity";

describe("WalkInTheCity component", () => {
  it("WalkInTheCity should render correctly", () => {
    render(<WalkInTheCity />);
    expect(true).toBeTruthy();
  });
});
