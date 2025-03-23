import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import SocialLife from "../SocialLife";

describe("SocialLife component", () => {
  it("SocialLife should render correctly", () => {
    render(<SocialLife />);
    expect(true).toBeTruthy();
  });
});
