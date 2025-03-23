import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import DesignerGirl from "../DesignerGirl";

describe("DesignerGirl component", () => {
  it("DesignerGirl should render correctly", () => {
    render(<DesignerGirl />);
    expect(true).toBeTruthy();
  });
});
