import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import PersonalInfo from "../PersonalInfo";

describe("PersonalInfo component", () => {
  it("PersonalInfo should render correctly", () => {
    render(<PersonalInfo />);
    expect(true).toBeTruthy();
  });
});
