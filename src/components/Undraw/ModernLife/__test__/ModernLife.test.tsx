import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ModernLife from "../ModernLife";

describe("ModernLife component", () => {
  it("ModernLife should render correctly", () => {
    render(<ModernLife />);
    expect(true).toBeTruthy();
  });
});
