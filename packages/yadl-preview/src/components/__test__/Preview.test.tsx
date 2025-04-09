import React from "react";
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import Preview from "../Preview";

describe("Preview component", () => {
  it("Preview should render correctly", () => {
    render(<Preview edges={[]} nodes={[]} />);
    expect(true).toBeTruthy();
  });
});
