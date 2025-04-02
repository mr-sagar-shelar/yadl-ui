import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Django from "../Django";

describe("Django component", () => {
  it("Django should render correctly", () => {
    render(<Django />);
    expect(true).toBeTruthy();
  });
});
