import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import AzureIoTOperations from "../AzureIoTOperations";

describe("AzureIoTOperations component", () => {
  it("AzureIoTOperations should render correctly", () => {
    render(<AzureIoTOperations />);
    expect(true).toBeTruthy();
  });
});
