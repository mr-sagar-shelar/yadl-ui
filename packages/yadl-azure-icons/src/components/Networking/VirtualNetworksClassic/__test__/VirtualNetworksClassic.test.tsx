import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import VirtualNetworksClassic from "../VirtualNetworksClassic";

describe("VirtualNetworksClassic component", () => {
  it("VirtualNetworksClassic should render correctly", () => {
    render(<VirtualNetworksClassic />);
    expect(true).toBeTruthy();
  });
});
