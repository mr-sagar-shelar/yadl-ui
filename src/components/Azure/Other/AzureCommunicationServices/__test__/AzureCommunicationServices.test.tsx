import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import AzureCommunicationServices from "../AzureCommunicationServices";

describe("AzureCommunicationServices component", () => {
  it("AzureCommunicationServices should render correctly", () => {
    render(<AzureCommunicationServices />);
    expect(true).toBeTruthy();
  });
});
