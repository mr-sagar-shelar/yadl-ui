import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Ready_to_printArtMuseum from "../Ready_to_printArtMuseum";

describe("Ready_to_printArtMuseum component", () => {
  it("Ready_to_printArtMuseum should render correctly", () => {
    render(<Ready_to_printArtMuseum />);
    expect(true).toBeTruthy();
  });
});
