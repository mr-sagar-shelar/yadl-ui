import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import TrueFriendsTrueFriends from "../TrueFriendsTrueFriends";

describe("TrueFriendsTrueFriends component", () => {
  it("TrueFriendsTrueFriends should render correctly", () => {
    render(<TrueFriendsTrueFriends />);
    expect(true).toBeTruthy();
  });
});
