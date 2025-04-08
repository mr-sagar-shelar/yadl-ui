import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ApplicationGatewayContainers from "../ApplicationGatewayContainers";

describe("ApplicationGatewayContainers component", () => {
  it("ApplicationGatewayContainers should render correctly", () => {
    render(<ApplicationGatewayContainers />);
    expect(true).toBeTruthy();
  });
});
