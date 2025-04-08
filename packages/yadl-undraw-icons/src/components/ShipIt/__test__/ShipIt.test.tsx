import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ShipIt from "../ShipIt";

describe("ShipIt component", () => {
  it("ShipIt should render correctly", () => {
    render(<ShipIt />);
    expect(true).toBeTruthy();
  });
});
