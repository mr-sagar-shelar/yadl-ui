import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ByTheRoad from "../ByTheRoad";

describe("ByTheRoad component", () => {
  it("ByTheRoad should render correctly", () => {
    render(<ByTheRoad />);
    expect(true).toBeTruthy();
  });
});
