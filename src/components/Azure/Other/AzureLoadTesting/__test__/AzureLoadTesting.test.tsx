import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import AzureLoadTesting from "../AzureLoadTesting";

describe("AzureLoadTesting component", () => {
  it("AzureLoadTesting should render correctly", () => {
    render(<AzureLoadTesting />);
    expect(true).toBeTruthy();
  });
});
