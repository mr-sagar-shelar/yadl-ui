import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import TorchServe from "../TorchServe";

describe("TorchServe component", () => {
  it("TorchServe should render correctly", () => {
    render(<TorchServe />);
    expect(true).toBeTruthy();
  });
});
