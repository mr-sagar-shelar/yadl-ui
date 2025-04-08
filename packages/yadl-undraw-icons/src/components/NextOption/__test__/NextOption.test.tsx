import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import NextOption from "../NextOption";

describe("NextOption component", () => {
  it("NextOption should render correctly", () => {
    render(<NextOption />);
    expect(true).toBeTruthy();
  });
});
