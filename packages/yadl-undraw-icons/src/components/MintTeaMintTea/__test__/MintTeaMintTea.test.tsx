import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import MintTeaMintTea from "../MintTeaMintTea";

describe("MintTeaMintTea component", () => {
  it("MintTeaMintTea should render correctly", () => {
    render(<MintTeaMintTea />);
    expect(true).toBeTruthy();
  });
});
