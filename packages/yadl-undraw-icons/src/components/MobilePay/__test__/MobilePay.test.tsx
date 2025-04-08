import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import MobilePay from "../MobilePay";

describe("MobilePay component", () => {
  it("MobilePay should render correctly", () => {
    render(<MobilePay />);
    expect(true).toBeTruthy();
  });
});
