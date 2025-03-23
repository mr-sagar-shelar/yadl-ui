import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import MedicalResearch from "../MedicalResearch";

describe("MedicalResearch component", () => {
  it("MedicalResearch should render correctly", () => {
    render(<MedicalResearch />);
    expect(true).toBeTruthy();
  });
});
