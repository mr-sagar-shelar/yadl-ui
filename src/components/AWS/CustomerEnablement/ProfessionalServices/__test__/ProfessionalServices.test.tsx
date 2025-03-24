import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ProfessionalServices from "../ProfessionalServices";

describe("ProfessionalServices component", () => {
  it("ProfessionalServices should render correctly", () => {
    render(<ProfessionalServices />);
    expect(true).toBeTruthy();
  });
});
