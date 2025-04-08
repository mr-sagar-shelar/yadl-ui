import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import AzureStorageMover from "../AzureStorageMover";

describe("AzureStorageMover component", () => {
  it("AzureStorageMover should render correctly", () => {
    render(<AzureStorageMover />);
    expect(true).toBeTruthy();
  });
});
