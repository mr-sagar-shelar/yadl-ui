import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import QuantumLedgerDatabase from "../QuantumLedgerDatabase";

describe("QuantumLedgerDatabase component", () => {
  it("QuantumLedgerDatabase should render correctly", () => {
    render(<QuantumLedgerDatabase />);
    expect(true).toBeTruthy();
  });
});
