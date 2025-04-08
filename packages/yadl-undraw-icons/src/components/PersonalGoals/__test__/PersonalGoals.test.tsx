import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import PersonalGoals from "../PersonalGoals";

describe("PersonalGoals component", () => {
  it("PersonalGoals should render correctly", () => {
    render(<PersonalGoals />);
    expect(true).toBeTruthy();
  });
});
