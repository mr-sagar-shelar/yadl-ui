import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import BackupVault from "../BackupVault";

describe("BackupVault component", () => {
  it("BackupVault should render correctly", () => {
    render(<BackupVault />);
    expect(true).toBeTruthy();
  });
});
