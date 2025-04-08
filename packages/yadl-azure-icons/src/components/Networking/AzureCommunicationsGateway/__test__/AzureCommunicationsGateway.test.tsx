import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import AzureCommunicationsGateway from "../AzureCommunicationsGateway";

describe("AzureCommunicationsGateway component", () => {
  it("AzureCommunicationsGateway should render correctly", () => {
    render(<AzureCommunicationsGateway />);
    expect(true).toBeTruthy();
  });
});
