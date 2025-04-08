import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import WebShopping from "../WebShopping";

describe("WebShopping component", () => {
  it("WebShopping should render correctly", () => {
    render(<WebShopping />);
    expect(true).toBeTruthy();
  });
});
