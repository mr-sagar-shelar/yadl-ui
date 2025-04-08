import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Power from "../Power";

describe("Power component", () => {
  it("Power should render correctly", () => {
    render(<Power />);
    expect(true).toBeTruthy();
  });
});
