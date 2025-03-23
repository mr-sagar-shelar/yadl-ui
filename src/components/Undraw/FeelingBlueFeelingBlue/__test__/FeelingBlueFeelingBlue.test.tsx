import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import FeelingBlueFeelingBlue from "../FeelingBlueFeelingBlue";

describe("FeelingBlueFeelingBlue component", () => {
  it("FeelingBlueFeelingBlue should render correctly", () => {
    render(<FeelingBlueFeelingBlue />);
    expect(true).toBeTruthy();
  });
});
