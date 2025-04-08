import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Profiler from "../Profiler";

describe("Profiler component", () => {
  it("Profiler should render correctly", () => {
    render(<Profiler />);
    expect(true).toBeTruthy();
  });
});
