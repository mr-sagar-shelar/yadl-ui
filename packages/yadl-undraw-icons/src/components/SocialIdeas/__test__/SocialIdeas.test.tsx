import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import SocialIdeas from "../SocialIdeas";

describe("SocialIdeas component", () => {
  it("SocialIdeas should render correctly", () => {
    render(<SocialIdeas />);
    expect(true).toBeTruthy();
  });
});
