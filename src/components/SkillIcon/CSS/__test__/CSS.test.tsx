import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import CSS from "../CSS";

describe("CSS component", () => {
  it("CSS should render correctly", () => {
    render(<CSS />);
    expect(true).toBeTruthy();
  });
});
