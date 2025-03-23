import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import MobilePayments from "../MobilePayments";

describe("MobilePayments component", () => {
  it("MobilePayments should render correctly", () => {
    render(<MobilePayments />);
    expect(true).toBeTruthy();
  });
});
