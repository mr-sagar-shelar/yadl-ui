import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Elements from "../Elements";

describe("Elements component", () => {
  it("Elements should render correctly", () => {
    render(<Elements />);
    expect(true).toBeTruthy();
  });
});
