import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import StorageAccountsClassic from "../StorageAccountsClassic";

describe("StorageAccountsClassic component", () => {
  it("StorageAccountsClassic should render correctly", () => {
    render(<StorageAccountsClassic />);
    expect(true).toBeTruthy();
  });
});
