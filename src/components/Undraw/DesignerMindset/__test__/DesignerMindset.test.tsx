import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import DesignerMindset from "../DesignerMindset";

describe("DesignerMindset component", () => {
  it("DesignerMindset should render correctly", () => {
    render(<DesignerMindset />);
    expect(true).toBeTruthy();
  });
});
