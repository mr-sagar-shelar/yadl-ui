import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import StorageAccounts from "../StorageAccounts";

describe("StorageAccounts component", () => {
  it("StorageAccounts should render correctly", () => {
    render(<StorageAccounts />);
    expect(true).toBeTruthy();
  });
});
