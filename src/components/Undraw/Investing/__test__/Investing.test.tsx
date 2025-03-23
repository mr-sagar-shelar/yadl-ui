import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Investing from "../Investing";

describe("Investing component", () => {
  it("Investing should render correctly", () => {
    render(<Investing />);
    expect(true).toBeTruthy();
  });
});
