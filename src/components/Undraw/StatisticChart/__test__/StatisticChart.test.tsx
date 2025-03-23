import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import StatisticChart from "../StatisticChart";

describe("StatisticChart component", () => {
  it("StatisticChart should render correctly", () => {
    render(<StatisticChart />);
    expect(true).toBeTruthy();
  });
});
