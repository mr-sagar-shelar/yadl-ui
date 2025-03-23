import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Books from "../Books";

describe("Books component", () => {
  it("Books should render correctly", () => {
    render(<Books />);
    expect(true).toBeTruthy();
  });
});
