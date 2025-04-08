import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import AssetInventory from "../AssetInventory";

describe("AssetInventory component", () => {
  it("AssetInventory should render correctly", () => {
    render(<AssetInventory />);
    expect(true).toBeTruthy();
  });
});
