import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import SelectedBox from "../SelectedBox";

describe("SelectedBox component", () => {
  it("SelectedBox should render correctly", () => {
    render(<SelectedBox />);
    expect(true).toBeTruthy();
  });
});
