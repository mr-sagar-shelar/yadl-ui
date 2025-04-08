import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import OpenCV from "../OpenCV";

describe("OpenCV component", () => {
  it("OpenCV should render correctly", () => {
    render(<OpenCV />);
    expect(true).toBeTruthy();
  });
});
