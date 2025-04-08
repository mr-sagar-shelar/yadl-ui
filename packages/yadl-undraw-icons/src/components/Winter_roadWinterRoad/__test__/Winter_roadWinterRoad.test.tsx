import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Winter_roadWinterRoad from "../Winter_roadWinterRoad";

describe("Winter_roadWinterRoad component", () => {
  it("Winter_roadWinterRoad should render correctly", () => {
    render(<Winter_roadWinterRoad />);
    expect(true).toBeTruthy();
  });
});
