import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ProfessionalWomanAvatar from "../ProfessionalWomanAvatar";

describe("ProfessionalWomanAvatar component", () => {
  it("ProfessionalWomanAvatar should render correctly", () => {
    render(<ProfessionalWomanAvatar />);
    expect(true).toBeTruthy();
  });
});
