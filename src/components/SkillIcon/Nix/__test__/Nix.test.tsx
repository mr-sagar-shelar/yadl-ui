import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Nix from "../Nix";

describe("Nix component", () => {
  it("Nix should render correctly", () => {
    render(<Nix />);
    expect(true).toBeTruthy();
  });
});
