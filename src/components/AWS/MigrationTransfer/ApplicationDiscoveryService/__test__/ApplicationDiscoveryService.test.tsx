import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ApplicationDiscoveryService from "../ApplicationDiscoveryService";

describe("ApplicationDiscoveryService component", () => {
  it("ApplicationDiscoveryService should render correctly", () => {
    render(<ApplicationDiscoveryService />);
    expect(true).toBeTruthy();
  });
});
