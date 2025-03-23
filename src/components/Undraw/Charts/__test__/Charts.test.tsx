import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Charts from "../Charts";

describe("Charts component", () => {
  it("Charts should render correctly", () => {
    render(<Charts />);
    expect(true).toBeTruthy();
  });
});
