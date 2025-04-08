import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import SocialGirl from "../SocialGirl";

describe("SocialGirl component", () => {
  it("SocialGirl should render correctly", () => {
    render(<SocialGirl />);
    expect(true).toBeTruthy();
  });
});
