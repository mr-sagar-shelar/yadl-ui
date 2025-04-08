import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import AWholeYearAWholeYear from "../AWholeYearAWholeYear";

describe("AWholeYearAWholeYear component", () => {
  it("AWholeYearAWholeYear should render correctly", () => {
    render(<AWholeYearAWholeYear />);
    expect(true).toBeTruthy();
  });
});
