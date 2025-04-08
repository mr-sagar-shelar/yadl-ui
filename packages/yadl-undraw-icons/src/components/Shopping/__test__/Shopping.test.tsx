import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Shopping from "../Shopping";

describe("Shopping component", () => {
  it("Shopping should render correctly", () => {
    render(<Shopping />);
    expect(true).toBeTruthy();
  });
});
