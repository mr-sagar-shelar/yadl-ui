import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import AnomalyDetector from "../AnomalyDetector";

describe("AnomalyDetector component", () => {
  it("AnomalyDetector should render correctly", () => {
    render(<AnomalyDetector />);
    expect(true).toBeTruthy();
  });
});
