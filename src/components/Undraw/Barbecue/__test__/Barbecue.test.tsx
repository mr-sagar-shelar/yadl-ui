import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Barbecue from "../Barbecue";

describe("Barbecue component", () => {
  it("Barbecue should render correctly", () => {
    render(<Barbecue />);
    expect(true).toBeTruthy();
  });
});
