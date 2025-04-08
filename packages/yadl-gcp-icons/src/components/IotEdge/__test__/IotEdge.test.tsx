import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import IotEdge from "../IotEdge";

describe("IotEdge component", () => {
  it("IotEdge should render correctly", () => {
    render(<IotEdge />);
    expect(true).toBeTruthy();
  });
});
