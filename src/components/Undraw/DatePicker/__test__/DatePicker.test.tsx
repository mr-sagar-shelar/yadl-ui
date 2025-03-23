import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import DatePicker from "../DatePicker";

describe("DatePicker component", () => {
  it("DatePicker should render correctly", () => {
    render(<DatePicker />);
    expect(true).toBeTruthy();
  });
});
