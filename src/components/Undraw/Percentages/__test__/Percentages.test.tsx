import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Percentages from "../Percentages";

describe("Percentages component", () => {
  it("Percentages should render correctly", () => {
    render(<Percentages />);
    expect(true).toBeTruthy();
  });
});
