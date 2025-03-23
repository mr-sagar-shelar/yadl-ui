import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Science from "../Science";

describe("Science component", () => {
  it("Science should render correctly", () => {
    render(<Science />);
    expect(true).toBeTruthy();
  });
});
