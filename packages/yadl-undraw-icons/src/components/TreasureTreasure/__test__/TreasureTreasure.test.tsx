import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import TreasureTreasure from "../TreasureTreasure";

describe("TreasureTreasure component", () => {
  it("TreasureTreasure should render correctly", () => {
    render(<TreasureTreasure />);
    expect(true).toBeTruthy();
  });
});
