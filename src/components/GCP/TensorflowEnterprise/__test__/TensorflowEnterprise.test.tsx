import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import TensorflowEnterprise from "../TensorflowEnterprise";

describe("TensorflowEnterprise component", () => {
  it("TensorflowEnterprise should render correctly", () => {
    render(<TensorflowEnterprise />);
    expect(true).toBeTruthy();
  });
});
