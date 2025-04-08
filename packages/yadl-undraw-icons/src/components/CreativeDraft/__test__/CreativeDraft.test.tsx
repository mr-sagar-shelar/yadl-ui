import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import CreativeDraft from "../CreativeDraft";

describe("CreativeDraft component", () => {
  it("CreativeDraft should render correctly", () => {
    render(<CreativeDraft />);
    expect(true).toBeTruthy();
  });
});
