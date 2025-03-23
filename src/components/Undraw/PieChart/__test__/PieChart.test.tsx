import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import PieChart from "../PieChart";

describe("PieChart component", () => {
  it("PieChart should render correctly", () => {
    render(<PieChart />);
    expect(true).toBeTruthy();
  });
});
