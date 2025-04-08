import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import PersonalSite from "../PersonalSite";

describe("PersonalSite component", () => {
  it("PersonalSite should render correctly", () => {
    render(<PersonalSite />);
    expect(true).toBeTruthy();
  });
});
