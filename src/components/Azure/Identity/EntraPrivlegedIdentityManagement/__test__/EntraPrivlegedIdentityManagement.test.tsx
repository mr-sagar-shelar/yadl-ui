import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import EntraPrivlegedIdentityManagement from "../EntraPrivlegedIdentityManagement";

describe("EntraPrivlegedIdentityManagement component", () => {
  it("EntraPrivlegedIdentityManagement should render correctly", () => {
    render(<EntraPrivlegedIdentityManagement />);
    expect(true).toBeTruthy();
  });
});
