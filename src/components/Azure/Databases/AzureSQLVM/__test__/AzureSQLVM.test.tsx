import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import AzureSQLVM from "../AzureSQLVM";

describe("AzureSQLVM component", () => {
  it("AzureSQLVM should render correctly", () => {
    render(<AzureSQLVM />);
    expect(true).toBeTruthy();
  });
});
