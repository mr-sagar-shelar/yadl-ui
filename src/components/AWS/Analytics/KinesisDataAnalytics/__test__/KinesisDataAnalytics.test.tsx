import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import KinesisDataAnalytics from "../KinesisDataAnalytics";

describe("KinesisDataAnalytics component", () => {
  it("KinesisDataAnalytics should render correctly", () => {
    render(<KinesisDataAnalytics />);
    expect(true).toBeTruthy();
  });
});
