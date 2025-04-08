import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Join from "../Join";

describe("Join component", () => {
  it("Join should render correctly", () => {
    render(<Join />);
    expect(true).toBeTruthy();
  });
});
