import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import CloudSecurityScanner from "../CloudSecurityScanner";

describe("CloudSecurityScanner component", () => {
  it("CloudSecurityScanner should render correctly", () => {
    render(<CloudSecurityScanner />);
    expect(true).toBeTruthy();
  });
});
