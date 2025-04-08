import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import SocialStrategy from "../SocialStrategy";

describe("SocialStrategy component", () => {
  it("SocialStrategy should render correctly", () => {
    render(<SocialStrategy />);
    expect(true).toBeTruthy();
  });
});
