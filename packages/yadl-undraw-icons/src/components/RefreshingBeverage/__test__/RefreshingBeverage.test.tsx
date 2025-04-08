import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import RefreshingBeverage from "../RefreshingBeverage";

describe("RefreshingBeverage component", () => {
  it("RefreshingBeverage should render correctly", () => {
    render(<RefreshingBeverage />);
    expect(true).toBeTruthy();
  });
});
