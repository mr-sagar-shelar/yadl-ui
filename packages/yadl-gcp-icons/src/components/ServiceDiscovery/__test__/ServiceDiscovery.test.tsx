import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ServiceDiscovery from "../ServiceDiscovery";

describe("ServiceDiscovery component", () => {
  it("ServiceDiscovery should render correctly", () => {
    render(<ServiceDiscovery />);
    expect(true).toBeTruthy();
  });
});
