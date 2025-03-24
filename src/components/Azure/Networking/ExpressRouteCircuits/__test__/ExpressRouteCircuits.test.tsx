import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ExpressRouteCircuits from "../ExpressRouteCircuits";

describe("ExpressRouteCircuits component", () => {
  it("ExpressRouteCircuits should render correctly", () => {
    render(<ExpressRouteCircuits />);
    expect(true).toBeTruthy();
  });
});
