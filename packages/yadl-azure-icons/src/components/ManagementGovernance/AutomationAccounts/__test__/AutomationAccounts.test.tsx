import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import AutomationAccounts from "../AutomationAccounts";

describe("AutomationAccounts component", () => {
  it("AutomationAccounts should render correctly", () => {
    render(<AutomationAccounts />);
    expect(true).toBeTruthy();
  });
});
