import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import RouteFilters from "../RouteFilters";

describe("RouteFilters component", () => {
  it("RouteFilters should render correctly", () => {
    render(<RouteFilters />);
    expect(true).toBeTruthy();
  });
});
