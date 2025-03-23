import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import WritingDownIdeas from "../WritingDownIdeas";

describe("WritingDownIdeas component", () => {
  it("WritingDownIdeas should render correctly", () => {
    render(<WritingDownIdeas />);
    expect(true).toBeTruthy();
  });
});
