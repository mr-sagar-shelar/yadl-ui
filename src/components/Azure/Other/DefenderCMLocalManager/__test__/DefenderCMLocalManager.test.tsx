import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import DefenderCMLocalManager from "../DefenderCMLocalManager";

describe("DefenderCMLocalManager component", () => {
  it("DefenderCMLocalManager should render correctly", () => {
    render(<DefenderCMLocalManager />);
    expect(true).toBeTruthy();
  });
});
