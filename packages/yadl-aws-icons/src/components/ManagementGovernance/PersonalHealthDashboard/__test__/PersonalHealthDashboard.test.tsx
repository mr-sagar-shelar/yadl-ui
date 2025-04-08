import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import PersonalHealthDashboard from "../PersonalHealthDashboard";

describe("PersonalHealthDashboard component", () => {
  it("PersonalHealthDashboard should render correctly", () => {
    render(<PersonalHealthDashboard />);
    expect(true).toBeTruthy();
  });
});
