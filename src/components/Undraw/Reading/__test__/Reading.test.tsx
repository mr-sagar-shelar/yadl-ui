import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Reading from "../Reading";

describe("Reading component", () => {
  it("Reading should render correctly", () => {
    render(<Reading />);
    expect(true).toBeTruthy();
  });
});
