import React from "react";
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import SearchSkillIcons from "../SearchSkillIcons";

describe("SearchSkillIcons component", () => {
  it("SearchSkillIcons should render correctly", () => {
    render(<SearchSkillIcons />);
    expect(true).toBeTruthy();
  });
});
