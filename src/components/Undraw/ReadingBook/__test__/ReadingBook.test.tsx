import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ReadingBook from "../ReadingBook";

describe("ReadingBook component", () => {
  it("ReadingBook should render correctly", () => {
    render(<ReadingBook />);
    expect(true).toBeTruthy();
  });
});
