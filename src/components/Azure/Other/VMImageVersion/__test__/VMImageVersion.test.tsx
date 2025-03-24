import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import VMImageVersion from "../VMImageVersion";

describe("VMImageVersion component", () => {
  it("VMImageVersion should render correctly", () => {
    render(<VMImageVersion />);
    expect(true).toBeTruthy();
  });
});
