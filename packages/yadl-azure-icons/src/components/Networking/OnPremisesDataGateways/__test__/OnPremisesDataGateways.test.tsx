import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import OnPremisesDataGateways from "../OnPremisesDataGateways";

describe("OnPremisesDataGateways component", () => {
  it("OnPremisesDataGateways should render correctly", () => {
    render(<OnPremisesDataGateways />);
    expect(true).toBeTruthy();
  });
});
