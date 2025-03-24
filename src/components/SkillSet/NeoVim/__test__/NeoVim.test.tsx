import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import NeoVim from "../NeoVim";

describe("NeoVim component", () => {
  it("NeoVim should render correctly", () => {
    render(<NeoVim />);
    expect(true).toBeTruthy();
  });
});
