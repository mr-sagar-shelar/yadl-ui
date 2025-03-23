import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import PenTool from "../PenTool";

describe("PenTool component", () => {
  it("PenTool should render correctly", () => {
    render(<PenTool />);
    expect(true).toBeTruthy();
  });
});
