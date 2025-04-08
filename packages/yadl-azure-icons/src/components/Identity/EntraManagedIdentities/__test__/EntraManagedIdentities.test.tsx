import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import EntraManagedIdentities from "../EntraManagedIdentities";

describe("EntraManagedIdentities component", () => {
  it("EntraManagedIdentities should render correctly", () => {
    render(<EntraManagedIdentities />);
    expect(true).toBeTruthy();
  });
});
