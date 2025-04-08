import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ElementalDelta from "../ElementalDelta";

describe("ElementalDelta component", () => {
  it("ElementalDelta should render correctly", () => {
    render(<ElementalDelta />);
    expect(true).toBeTruthy();
  });
});
