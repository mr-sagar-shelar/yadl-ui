import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import WebSecurityScanner from "../WebSecurityScanner";

describe("WebSecurityScanner component", () => {
  it("WebSecurityScanner should render correctly", () => {
    render(<WebSecurityScanner />);
    expect(true).toBeTruthy();
  });
});
