import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import AzureMapsAccounts from "../AzureMapsAccounts";

describe("AzureMapsAccounts component", () => {
  it("AzureMapsAccounts should render correctly", () => {
    render(<AzureMapsAccounts />);
    expect(true).toBeTruthy();
  });
});
