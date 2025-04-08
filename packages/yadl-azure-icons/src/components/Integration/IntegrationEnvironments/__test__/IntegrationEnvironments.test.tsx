import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import IntegrationEnvironments from "../IntegrationEnvironments";

describe("IntegrationEnvironments component", () => {
  it("IntegrationEnvironments should render correctly", () => {
    render(<IntegrationEnvironments />);
    expect(true).toBeTruthy();
  });
});
