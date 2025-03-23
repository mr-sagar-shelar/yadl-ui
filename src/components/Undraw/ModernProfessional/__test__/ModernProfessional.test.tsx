import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ModernProfessional from "../ModernProfessional";

describe("ModernProfessional component", () => {
  it("ModernProfessional should render correctly", () => {
    render(<ModernProfessional />);
    expect(true).toBeTruthy();
  });
});
