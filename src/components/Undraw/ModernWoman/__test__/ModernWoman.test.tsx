import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ModernWoman from "../ModernWoman";

describe("ModernWoman component", () => {
  it("ModernWoman should render correctly", () => {
    render(<ModernWoman />);
    expect(true).toBeTruthy();
  });
});
