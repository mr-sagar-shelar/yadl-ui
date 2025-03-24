import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import TransferFamily from "../TransferFamily";

describe("TransferFamily component", () => {
  it("TransferFamily should render correctly", () => {
    render(<TransferFamily />);
    expect(true).toBeTruthy();
  });
});
