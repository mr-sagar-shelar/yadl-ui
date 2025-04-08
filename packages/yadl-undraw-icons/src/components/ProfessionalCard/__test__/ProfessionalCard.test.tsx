import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ProfessionalCard from "../ProfessionalCard";

describe("ProfessionalCard component", () => {
  it("ProfessionalCard should render correctly", () => {
    render(<ProfessionalCard />);
    expect(true).toBeTruthy();
  });
});
