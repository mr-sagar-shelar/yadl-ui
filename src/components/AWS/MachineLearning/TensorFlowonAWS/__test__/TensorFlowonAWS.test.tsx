import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import TensorFlowonAWS from "../TensorFlowonAWS";

describe("TensorFlowonAWS component", () => {
  it("TensorFlowonAWS should render correctly", () => {
    render(<TensorFlowonAWS />);
    expect(true).toBeTruthy();
  });
});
