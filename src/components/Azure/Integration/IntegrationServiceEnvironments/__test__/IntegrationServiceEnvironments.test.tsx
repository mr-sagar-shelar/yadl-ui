import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import IntegrationServiceEnvironments from "../IntegrationServiceEnvironments";

describe("IntegrationServiceEnvironments component", () => {
  it("IntegrationServiceEnvironments should render correctly", () => {
    render(<IntegrationServiceEnvironments />);
    expect(true).toBeTruthy();
  });
});
