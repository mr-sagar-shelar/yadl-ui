import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import AzureManagedGrafana from "../AzureManagedGrafana";

describe("AzureManagedGrafana component", () => {
  it("AzureManagedGrafana should render correctly", () => {
    render(<AzureManagedGrafana />);
    expect(true).toBeTruthy();
  });
});
