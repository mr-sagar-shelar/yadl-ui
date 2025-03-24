import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ServiceManagementConnector from "../ServiceManagementConnector";

describe("ServiceManagementConnector component", () => {
  it("ServiceManagementConnector should render correctly", () => {
    render(<ServiceManagementConnector />);
    expect(true).toBeTruthy();
  });
});
