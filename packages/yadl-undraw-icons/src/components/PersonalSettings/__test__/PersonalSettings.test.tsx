import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import PersonalSettings from "../PersonalSettings";

describe("PersonalSettings component", () => {
  it("PersonalSettings should render correctly", () => {
    render(<PersonalSettings />);
    expect(true).toBeTruthy();
  });
});
