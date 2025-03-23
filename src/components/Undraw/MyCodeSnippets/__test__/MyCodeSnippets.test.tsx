import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import MyCodeSnippets from "../MyCodeSnippets";

describe("MyCodeSnippets component", () => {
  it("MyCodeSnippets should render correctly", () => {
    render(<MyCodeSnippets />);
    expect(true).toBeTruthy();
  });
});
