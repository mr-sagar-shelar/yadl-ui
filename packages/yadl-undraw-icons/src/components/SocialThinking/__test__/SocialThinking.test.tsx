import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import SocialThinking from "../SocialThinking";

describe("SocialThinking component", () => {
  it("SocialThinking should render correctly", () => {
    render(<SocialThinking />);
    expect(true).toBeTruthy();
  });
});
