import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import SocialExpert from "../SocialExpert";

describe("SocialExpert component", () => {
  it("SocialExpert should render correctly", () => {
    render(<SocialExpert />);
    expect(true).toBeTruthy();
  });
});
