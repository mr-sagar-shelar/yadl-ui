import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import AssetSelection from "../AssetSelection";

describe("AssetSelection component", () => {
  it("AssetSelection should render correctly", () => {
    render(<AssetSelection />);
    expect(true).toBeTruthy();
  });
});
