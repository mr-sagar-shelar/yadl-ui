import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import CloudApis from "../CloudApis";

describe("CloudApis component", () => {
  it("CloudApis should render correctly", () => {
    render(<CloudApis />);
    expect(true).toBeTruthy();
  });
});
