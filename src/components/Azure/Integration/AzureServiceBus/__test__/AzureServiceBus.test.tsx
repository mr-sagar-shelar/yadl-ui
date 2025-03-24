import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import AzureServiceBus from "../AzureServiceBus";

describe("AzureServiceBus component", () => {
  it("AzureServiceBus should render correctly", () => {
    render(<AzureServiceBus />);
    expect(true).toBeTruthy();
  });
});
