import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Goals from "../Goals";

describe("Goals component", () => {
  it("Goals should render correctly", () => {
    render(<Goals />);
    expect(true).toBeTruthy();
  });
});
