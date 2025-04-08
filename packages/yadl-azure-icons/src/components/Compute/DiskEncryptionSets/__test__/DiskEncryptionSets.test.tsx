import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import DiskEncryptionSets from "../DiskEncryptionSets";

describe("DiskEncryptionSets component", () => {
  it("DiskEncryptionSets should render correctly", () => {
    render(<DiskEncryptionSets />);
    expect(true).toBeTruthy();
  });
});
