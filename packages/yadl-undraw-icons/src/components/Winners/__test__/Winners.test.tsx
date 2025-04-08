import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Winners from "../Winners";

describe("Winners component", () => {
  it("Winners should render correctly", () => {
    render(<Winners />);
    expect(true).toBeTruthy();
  });
});
