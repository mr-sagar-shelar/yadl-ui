import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import SpotVMSS from "../SpotVMSS";

describe("SpotVMSS component", () => {
  it("SpotVMSS should render correctly", () => {
    render(<SpotVMSS />);
    expect(true).toBeTruthy();
  });
});
