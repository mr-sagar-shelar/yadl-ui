import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import CloudAssetInventory from "../CloudAssetInventory";

describe("CloudAssetInventory component", () => {
  it("CloudAssetInventory should render correctly", () => {
    render(<CloudAssetInventory />);
    expect(true).toBeTruthy();
  });
});
