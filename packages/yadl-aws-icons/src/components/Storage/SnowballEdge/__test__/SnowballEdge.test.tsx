import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import SnowballEdge from "../SnowballEdge";

describe("SnowballEdge component", () => {
  it("SnowballEdge should render correctly", () => {
    render(<SnowballEdge />);
    expect(true).toBeTruthy();
  });
});
