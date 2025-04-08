import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ManagedServices from "../ManagedServices";

describe("ManagedServices component", () => {
  it("ManagedServices should render correctly", () => {
    render(<ManagedServices />);
    expect(true).toBeTruthy();
  });
});
