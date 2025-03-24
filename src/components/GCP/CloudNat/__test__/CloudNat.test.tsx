import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import CloudNat from "../CloudNat";

describe("CloudNat component", () => {
  it("CloudNat should render correctly", () => {
    render(<CloudNat />);
    expect(true).toBeTruthy();
  });
});
