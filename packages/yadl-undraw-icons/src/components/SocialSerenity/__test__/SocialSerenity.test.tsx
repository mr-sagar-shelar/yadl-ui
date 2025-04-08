import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import SocialSerenity from "../SocialSerenity";

describe("SocialSerenity component", () => {
  it("SocialSerenity should render correctly", () => {
    render(<SocialSerenity />);
    expect(true).toBeTruthy();
  });
});
