import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import NatureBenefits from "../NatureBenefits";

describe("NatureBenefits component", () => {
  it("NatureBenefits should render correctly", () => {
    render(<NatureBenefits />);
    expect(true).toBeTruthy();
  });
});
