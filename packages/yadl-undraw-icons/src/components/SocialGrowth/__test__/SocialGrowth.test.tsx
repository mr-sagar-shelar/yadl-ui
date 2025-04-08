import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import SocialGrowth from "../SocialGrowth";

describe("SocialGrowth component", () => {
  it("SocialGrowth should render correctly", () => {
    render(<SocialGrowth />);
    expect(true).toBeTruthy();
  });
});
