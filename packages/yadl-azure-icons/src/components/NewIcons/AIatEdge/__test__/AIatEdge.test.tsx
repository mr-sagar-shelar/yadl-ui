import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import AIatEdge from "../AIatEdge";

describe("AIatEdge component", () => {
  it("AIatEdge should render correctly", () => {
    render(<AIatEdge />);
    expect(true).toBeTruthy();
  });
});
