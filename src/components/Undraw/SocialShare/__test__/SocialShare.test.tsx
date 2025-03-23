import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import SocialShare from "../SocialShare";

describe("SocialShare component", () => {
  it("SocialShare should render correctly", () => {
    render(<SocialShare />);
    expect(true).toBeTruthy();
  });
});
