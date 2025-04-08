import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import CloudSpanner from "../CloudSpanner";

describe("CloudSpanner component", () => {
  it("CloudSpanner should render correctly", () => {
    render(<CloudSpanner />);
    expect(true).toBeTruthy();
  });
});
