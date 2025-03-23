import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import BuildingBlocks from "../BuildingBlocks";

describe("BuildingBlocks component", () => {
  it("BuildingBlocks should render correctly", () => {
    render(<BuildingBlocks />);
    expect(true).toBeTruthy();
  });
});
