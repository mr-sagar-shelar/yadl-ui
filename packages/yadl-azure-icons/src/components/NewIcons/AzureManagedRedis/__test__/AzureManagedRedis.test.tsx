import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import AzureManagedRedis from "../AzureManagedRedis";

describe("AzureManagedRedis component", () => {
  it("AzureManagedRedis should render correctly", () => {
    render(<AzureManagedRedis />);
    expect(true).toBeTruthy();
  });
});
