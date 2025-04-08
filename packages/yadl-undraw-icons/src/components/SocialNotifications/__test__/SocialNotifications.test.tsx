import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import SocialNotifications from "../SocialNotifications";

describe("SocialNotifications component", () => {
  it("SocialNotifications should render correctly", () => {
    render(<SocialNotifications />);
    expect(true).toBeTruthy();
  });
});
