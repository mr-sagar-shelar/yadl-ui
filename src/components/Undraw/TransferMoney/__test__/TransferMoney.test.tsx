import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import TransferMoney from "../TransferMoney";

describe("TransferMoney component", () => {
  it("TransferMoney should render correctly", () => {
    render(<TransferMoney />);
    expect(true).toBeTruthy();
  });
});
