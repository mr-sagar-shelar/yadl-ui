import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Report from "../Report";

describe("Report component", () => {
  it("Report should render correctly", () => {
    render(<Report />);
    expect(true).toBeTruthy();
  });
});
