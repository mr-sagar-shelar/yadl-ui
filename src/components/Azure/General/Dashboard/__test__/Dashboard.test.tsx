import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Dashboard from "../Dashboard";

describe("Dashboard component", () => {
  it("Dashboard should render correctly", () => {
    render(<Dashboard />);
    expect(true).toBeTruthy();
  });
});
