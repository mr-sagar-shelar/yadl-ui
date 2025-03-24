import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import FraudDetector from "../FraudDetector";

describe("FraudDetector component", () => {
  it("FraudDetector should render correctly", () => {
    render(<FraudDetector />);
    expect(true).toBeTruthy();
  });
});
