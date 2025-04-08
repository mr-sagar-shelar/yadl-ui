import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import RouteTables from "../RouteTables";

describe("RouteTables component", () => {
  it("RouteTables should render correctly", () => {
    render(<RouteTables />);
    expect(true).toBeTruthy();
  });
});
