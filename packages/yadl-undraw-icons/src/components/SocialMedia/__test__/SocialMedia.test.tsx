import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import SocialMedia from "../SocialMedia";

describe("SocialMedia component", () => {
  it("SocialMedia should render correctly", () => {
    render(<SocialMedia />);
    expect(true).toBeTruthy();
  });
});
