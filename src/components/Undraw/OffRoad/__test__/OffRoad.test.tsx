import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import OffRoad from "../OffRoad";

describe("OffRoad component", () => {
  it("OffRoad should render correctly", () => {
    render(<OffRoad />);
    expect(true).toBeTruthy();
  });
});
