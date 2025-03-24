import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ExpressRouteTrafficCollector from "../ExpressRouteTrafficCollector";

describe("ExpressRouteTrafficCollector component", () => {
  it("ExpressRouteTrafficCollector should render correctly", () => {
    render(<ExpressRouteTrafficCollector />);
    expect(true).toBeTruthy();
  });
});
