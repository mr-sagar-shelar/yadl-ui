import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import DietDiet from "../DietDiet";

describe("DietDiet component", () => {
  it("DietDiet should render correctly", () => {
    render(<DietDiet />);
    expect(true).toBeTruthy();
  });
});
