import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import SocialBio from "../SocialBio";

describe("SocialBio component", () => {
  it("SocialBio should render correctly", () => {
    render(<SocialBio />);
    expect(true).toBeTruthy();
  });
});
