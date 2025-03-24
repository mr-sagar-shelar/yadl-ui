import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import NetworkTopology from "../NetworkTopology";

describe("NetworkTopology component", () => {
  it("NetworkTopology should render correctly", () => {
    render(<NetworkTopology />);
    expect(true).toBeTruthy();
  });
});
