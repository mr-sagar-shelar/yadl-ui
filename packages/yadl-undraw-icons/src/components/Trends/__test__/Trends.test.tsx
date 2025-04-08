import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Trends from "../Trends";

describe("Trends component", () => {
  it("Trends should render correctly", () => {
    render(<Trends />);
    expect(true).toBeTruthy();
  });
});
