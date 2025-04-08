import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Online_transactionsOnlineTransactions from "../Online_transactionsOnlineTransactions";

describe("Online_transactionsOnlineTransactions component", () => {
  it("Online_transactionsOnlineTransactions should render correctly", () => {
    render(<Online_transactionsOnlineTransactions />);
    expect(true).toBeTruthy();
  });
});
