import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import IoTEdge from "../IoTEdge";

describe("IoTEdge component", () => {
  it("IoTEdge should render correctly", () => {
    render(<IoTEdge />);
    expect(true).toBeTruthy();
  });
});
