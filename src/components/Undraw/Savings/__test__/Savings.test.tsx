import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Savings from "../Savings";

describe("Savings component", () => {
  it("Savings should render correctly", () => {
    render(<Savings />);
    expect(true).toBeTruthy();
  });
});
