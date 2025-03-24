import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import TemplateSpecs from "../TemplateSpecs";

describe("TemplateSpecs component", () => {
  it("TemplateSpecs should render correctly", () => {
    render(<TemplateSpecs />);
    expect(true).toBeTruthy();
  });
});
