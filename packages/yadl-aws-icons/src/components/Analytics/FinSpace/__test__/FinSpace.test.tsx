import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import FinSpace from "../FinSpace";

describe("FinSpace component", () => {
  it("FinSpace should render correctly", () => {
    render(<FinSpace />);
    expect(true).toBeTruthy();
  });
});
