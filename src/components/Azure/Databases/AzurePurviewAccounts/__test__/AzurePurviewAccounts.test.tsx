import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import AzurePurviewAccounts from "../AzurePurviewAccounts";

describe("AzurePurviewAccounts component", () => {
  it("AzurePurviewAccounts should render correctly", () => {
    render(<AzurePurviewAccounts />);
    expect(true).toBeTruthy();
  });
});
