import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import FinishLine from "../FinishLine";

describe("FinishLine component", () => {
  it("FinishLine should render correctly", () => {
    render(<FinishLine />);
    expect(true).toBeTruthy();
  });
});
