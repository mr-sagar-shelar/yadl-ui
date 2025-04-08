import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import SearchGrid from "../SearchGrid";

describe("SearchGrid component", () => {
  it("SearchGrid should render correctly", () => {
    render(<SearchGrid />);
    expect(true).toBeTruthy();
  });
});
