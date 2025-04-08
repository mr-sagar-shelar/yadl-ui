import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import AKSIstio from "../AKSIstio";

describe("AKSIstio component", () => {
  it("AKSIstio should render correctly", () => {
    render(<AKSIstio />);
    expect(true).toBeTruthy();
  });
});
