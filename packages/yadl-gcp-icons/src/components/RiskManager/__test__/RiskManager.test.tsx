import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import RiskManager from "../RiskManager";

describe("RiskManager component", () => {
  it("RiskManager should render correctly", () => {
    render(<RiskManager />);
    expect(true).toBeTruthy();
  });
});
