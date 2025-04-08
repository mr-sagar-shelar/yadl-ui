import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Spreadsheet from "../Spreadsheet";

describe("Spreadsheet component", () => {
  it("Spreadsheet should render correctly", () => {
    render(<Spreadsheet />);
    expect(true).toBeTruthy();
  });
});
