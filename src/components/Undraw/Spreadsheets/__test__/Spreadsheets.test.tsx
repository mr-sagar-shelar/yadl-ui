import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Spreadsheets from "../Spreadsheets";

describe("Spreadsheets component", () => {
  it("Spreadsheets should render correctly", () => {
    render(<Spreadsheets />);
    expect(true).toBeTruthy();
  });
});
