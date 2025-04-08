import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import SocialInfluencer from "../SocialInfluencer";

describe("SocialInfluencer component", () => {
  it("SocialInfluencer should render correctly", () => {
    render(<SocialInfluencer />);
    expect(true).toBeTruthy();
  });
});
