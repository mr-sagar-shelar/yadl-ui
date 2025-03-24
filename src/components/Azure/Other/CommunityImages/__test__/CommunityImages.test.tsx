import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import CommunityImages from "../CommunityImages";

describe("CommunityImages component", () => {
  it("CommunityImages should render correctly", () => {
    render(<CommunityImages />);
    expect(true).toBeTruthy();
  });
});
