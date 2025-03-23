import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Camera from "../Camera";

describe("Camera component", () => {
  it("Camera should render correctly", () => {
    render(<Camera />);
    expect(true).toBeTruthy();
  });
});
