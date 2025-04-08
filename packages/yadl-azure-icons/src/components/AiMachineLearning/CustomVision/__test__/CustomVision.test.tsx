import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import CustomVision from "../CustomVision";

describe("CustomVision component", () => {
  it("CustomVision should render correctly", () => {
    render(<CustomVision />);
    expect(true).toBeTruthy();
  });
});
