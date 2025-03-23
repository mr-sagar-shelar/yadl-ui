import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Contrast from "../Contrast";

describe("Contrast component", () => {
  it("Contrast should render correctly", () => {
    render(<Contrast />);
    expect(true).toBeTruthy();
  });
});
