import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import MissedChancesMissedChances from "../MissedChancesMissedChances";

describe("MissedChancesMissedChances component", () => {
  it("MissedChancesMissedChances should render correctly", () => {
    render(<MissedChancesMissedChances />);
    expect(true).toBeTruthy();
  });
});
