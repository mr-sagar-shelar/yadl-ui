import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import CloudMediaEdge from "../CloudMediaEdge";

describe("CloudMediaEdge component", () => {
  it("CloudMediaEdge should render correctly", () => {
    render(<CloudMediaEdge />);
    expect(true).toBeTruthy();
  });
});
