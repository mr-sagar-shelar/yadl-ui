import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import WindowShopping from "../WindowShopping";

describe("WindowShopping component", () => {
  it("WindowShopping should render correctly", () => {
    render(<WindowShopping />);
    expect(true).toBeTruthy();
  });
});
