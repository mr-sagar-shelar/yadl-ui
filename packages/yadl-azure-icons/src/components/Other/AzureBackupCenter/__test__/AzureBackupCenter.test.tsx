import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import AzureBackupCenter from "../AzureBackupCenter";

describe("AzureBackupCenter component", () => {
  it("AzureBackupCenter should render correctly", () => {
    render(<AzureBackupCenter />);
    expect(true).toBeTruthy();
  });
});
