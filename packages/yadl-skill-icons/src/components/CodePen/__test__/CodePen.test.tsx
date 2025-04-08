import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import CodePen from "../CodePen";

describe("CodePen component", () => {
  it("CodePen should render correctly", () => {
    render(<CodePen />);
    expect(true).toBeTruthy();
  });
});
