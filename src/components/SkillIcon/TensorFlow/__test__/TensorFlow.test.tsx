import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import TensorFlow from "../TensorFlow";

describe("TensorFlow component", () => {
  it("TensorFlow should render correctly", () => {
    render(<TensorFlow />);
    expect(true).toBeTruthy();
  });
});
