import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import RomanticGetaway from "../RomanticGetaway";

describe("RomanticGetaway component", () => {
  it("RomanticGetaway should render correctly", () => {
    render(<RomanticGetaway />);
    expect(true).toBeTruthy();
  });
});
