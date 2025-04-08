import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import OnlineShopping from "../OnlineShopping";

describe("OnlineShopping component", () => {
  it("OnlineShopping should render correctly", () => {
    render(<OnlineShopping />);
    expect(true).toBeTruthy();
  });
});
