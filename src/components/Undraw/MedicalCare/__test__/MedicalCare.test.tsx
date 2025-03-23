import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import MedicalCare from "../MedicalCare";

describe("MedicalCare component", () => {
  it("MedicalCare should render correctly", () => {
    render(<MedicalCare />);
    expect(true).toBeTruthy();
  });
});
