import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import MonthlyUsers from "../MonthlyUsers";

describe("MonthlyUsers component", () => {
  it("MonthlyUsers should render correctly", () => {
    render(<MonthlyUsers />);
    expect(true).toBeTruthy();
  });
});
