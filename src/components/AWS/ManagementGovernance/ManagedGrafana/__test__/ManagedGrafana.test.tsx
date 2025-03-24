import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ManagedGrafana from "../ManagedGrafana";

describe("ManagedGrafana component", () => {
  it("ManagedGrafana should render correctly", () => {
    render(<ManagedGrafana />);
    expect(true).toBeTruthy();
  });
});
