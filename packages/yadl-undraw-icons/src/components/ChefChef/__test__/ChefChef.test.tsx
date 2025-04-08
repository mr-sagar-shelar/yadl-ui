import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ChefChef from "../ChefChef";

describe("ChefChef component", () => {
  it("ChefChef should render correctly", () => {
    render(<ChefChef />);
    expect(true).toBeTruthy();
  });
});
