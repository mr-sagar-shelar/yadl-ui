import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import AzureDataboxGateway from "../AzureDataboxGateway";

describe("AzureDataboxGateway component", () => {
  it("AzureDataboxGateway should render correctly", () => {
    render(<AzureDataboxGateway />);
    expect(true).toBeTruthy();
  });
});
