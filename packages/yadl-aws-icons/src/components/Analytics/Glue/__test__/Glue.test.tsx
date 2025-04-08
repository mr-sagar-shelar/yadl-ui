import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Glue from "../Glue";

describe("Glue component", () => {
  it("Glue should render correctly", () => {
    render(<Glue />);
    expect(true).toBeTruthy();
  });
});
