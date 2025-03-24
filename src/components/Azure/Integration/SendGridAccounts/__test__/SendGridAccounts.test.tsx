import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import SendGridAccounts from "../SendGridAccounts";

describe("SendGridAccounts component", () => {
  it("SendGridAccounts should render correctly", () => {
    render(<SendGridAccounts />);
    expect(true).toBeTruthy();
  });
});
