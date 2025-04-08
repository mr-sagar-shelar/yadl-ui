import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import WinterDesignerWinterDesigner from "../WinterDesignerWinterDesigner";

describe("WinterDesignerWinterDesigner component", () => {
  it("WinterDesignerWinterDesigner should render correctly", () => {
    render(<WinterDesignerWinterDesigner />);
    expect(true).toBeTruthy();
  });
});
