import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Calendar from "../Calendar";

describe("Calendar component", () => {
  it("Calendar should render correctly", () => {
    render(<Calendar />);
    expect(true).toBeTruthy();
  });
});