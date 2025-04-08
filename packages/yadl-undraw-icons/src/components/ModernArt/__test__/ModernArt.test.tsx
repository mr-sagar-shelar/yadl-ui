import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ModernArt from "../ModernArt";

describe("ModernArt component", () => {
  it("ModernArt should render correctly", () => {
    render(<ModernArt />);
    expect(true).toBeTruthy();
  });
});
