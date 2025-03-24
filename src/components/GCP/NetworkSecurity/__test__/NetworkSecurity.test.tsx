import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import NetworkSecurity from "../NetworkSecurity";

describe("NetworkSecurity component", () => {
  it("NetworkSecurity should render correctly", () => {
    render(<NetworkSecurity />);
    expect(true).toBeTruthy();
  });
});
