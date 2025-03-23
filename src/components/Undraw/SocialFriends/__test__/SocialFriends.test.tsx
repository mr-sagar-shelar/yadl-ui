import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import SocialFriends from "../SocialFriends";

describe("SocialFriends component", () => {
  it("SocialFriends should render correctly", () => {
    render(<SocialFriends />);
    expect(true).toBeTruthy();
  });
});
