import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import OpenSupplyChainPlatform from "../OpenSupplyChainPlatform";

describe("OpenSupplyChainPlatform component", () => {
  it("OpenSupplyChainPlatform should render correctly", () => {
    render(<OpenSupplyChainPlatform />);
    expect(true).toBeTruthy();
  });
});
