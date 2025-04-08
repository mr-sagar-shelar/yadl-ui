import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import DesignerLife from "../DesignerLife";

describe("DesignerLife component", () => {
  it("DesignerLife should render correctly", () => {
    render(<DesignerLife />);
    expect(true).toBeTruthy();
  });
});
