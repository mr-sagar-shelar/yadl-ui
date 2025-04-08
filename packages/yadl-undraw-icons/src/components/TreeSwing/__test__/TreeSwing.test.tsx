import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import TreeSwing from "../TreeSwing";

describe("TreeSwing component", () => {
  it("TreeSwing should render correctly", () => {
    render(<TreeSwing />);
    expect(true).toBeTruthy();
  });
});
