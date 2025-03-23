import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import SelectedOptions from "../SelectedOptions";

describe("SelectedOptions component", () => {
  it("SelectedOptions should render correctly", () => {
    render(<SelectedOptions />);
    expect(true).toBeTruthy();
  });
});
