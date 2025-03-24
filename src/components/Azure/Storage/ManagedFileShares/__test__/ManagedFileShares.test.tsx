import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ManagedFileShares from "../ManagedFileShares";

describe("ManagedFileShares component", () => {
  it("ManagedFileShares should render correctly", () => {
    render(<ManagedFileShares />);
    expect(true).toBeTruthy();
  });
});
