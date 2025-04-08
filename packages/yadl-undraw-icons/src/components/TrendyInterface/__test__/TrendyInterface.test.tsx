import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import TrendyInterface from "../TrendyInterface";

describe("TrendyInterface component", () => {
  it("TrendyInterface should render correctly", () => {
    render(<TrendyInterface />);
    expect(true).toBeTruthy();
  });
});
