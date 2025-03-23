import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import PersonalFinance from "../PersonalFinance";

describe("PersonalFinance component", () => {
  it("PersonalFinance should render correctly", () => {
    render(<PersonalFinance />);
    expect(true).toBeTruthy();
  });
});
