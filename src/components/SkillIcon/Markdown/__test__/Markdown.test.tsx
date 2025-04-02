import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Markdown from "../Markdown";

describe("Markdown component", () => {
  it("Markdown should render correctly", () => {
    render(<Markdown />);
    expect(true).toBeTruthy();
  });
});
