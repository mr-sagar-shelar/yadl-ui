import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ADayOff from "../ADayOff";

describe("ADayOff component", () => {
  it("ADayOff should render correctly", () => {
    render(<ADayOff />);
    expect(true).toBeTruthy();
  });
});
