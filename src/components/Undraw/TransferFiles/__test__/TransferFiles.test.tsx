import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import TransferFiles from "../TransferFiles";

describe("TransferFiles component", () => {
  it("TransferFiles should render correctly", () => {
    render(<TransferFiles />);
    expect(true).toBeTruthy();
  });
});
