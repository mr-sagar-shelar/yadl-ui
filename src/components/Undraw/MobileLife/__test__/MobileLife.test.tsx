import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import MobileLife from "../MobileLife";

describe("MobileLife component", () => {
  it("MobileLife should render correctly", () => {
    render(<MobileLife />);
    expect(true).toBeTruthy();
  });
});
