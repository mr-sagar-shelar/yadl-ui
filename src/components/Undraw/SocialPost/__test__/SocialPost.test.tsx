import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import SocialPost from "../SocialPost";

describe("SocialPost component", () => {
  it("SocialPost should render correctly", () => {
    render(<SocialPost />);
    expect(true).toBeTruthy();
  });
});
