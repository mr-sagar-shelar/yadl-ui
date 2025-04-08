import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import StorageAzureFiles from "../StorageAzureFiles";

describe("StorageAzureFiles component", () => {
  it("StorageAzureFiles should render correctly", () => {
    render(<StorageAzureFiles />);
    expect(true).toBeTruthy();
  });
});
