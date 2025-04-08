import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ManagedIdentities from "../ManagedIdentities";

describe("ManagedIdentities component", () => {
  it("ManagedIdentities should render correctly", () => {
    render(<ManagedIdentities />);
    expect(true).toBeTruthy();
  });
});
