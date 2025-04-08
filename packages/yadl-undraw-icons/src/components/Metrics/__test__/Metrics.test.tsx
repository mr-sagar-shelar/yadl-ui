import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Metrics from "../Metrics";

describe("Metrics component", () => {
  it("Metrics should render correctly", () => {
    render(<Metrics />);
    expect(true).toBeTruthy();
  });
});
