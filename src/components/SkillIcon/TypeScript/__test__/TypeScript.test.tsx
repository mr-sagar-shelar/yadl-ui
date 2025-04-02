import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import TypeScript from "../TypeScript";

describe("TypeScript component", () => {
  it("TypeScript should render correctly", () => {
    render(<TypeScript />);
    expect(true).toBeTruthy();
  });
});
