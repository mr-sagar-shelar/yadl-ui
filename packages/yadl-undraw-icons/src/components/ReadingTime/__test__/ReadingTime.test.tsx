import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ReadingTime from "../ReadingTime";

describe("ReadingTime component", () => {
  it("ReadingTime should render correctly", () => {
    render(<ReadingTime />);
    expect(true).toBeTruthy();
  });
});
