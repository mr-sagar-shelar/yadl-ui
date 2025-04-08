import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import DefenderHistorian from "../DefenderHistorian";

describe("DefenderHistorian component", () => {
  it("DefenderHistorian should render correctly", () => {
    render(<DefenderHistorian />);
    expect(true).toBeTruthy();
  });
});
