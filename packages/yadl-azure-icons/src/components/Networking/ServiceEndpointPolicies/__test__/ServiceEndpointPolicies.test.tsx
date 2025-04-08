import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ServiceEndpointPolicies from "../ServiceEndpointPolicies";

describe("ServiceEndpointPolicies component", () => {
  it("ServiceEndpointPolicies should render correctly", () => {
    render(<ServiceEndpointPolicies />);
    expect(true).toBeTruthy();
  });
});
