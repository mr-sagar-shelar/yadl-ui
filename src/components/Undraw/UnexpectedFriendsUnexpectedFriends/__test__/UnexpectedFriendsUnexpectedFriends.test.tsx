import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import UnexpectedFriendsUnexpectedFriends from "../UnexpectedFriendsUnexpectedFriends";

describe("UnexpectedFriendsUnexpectedFriends component", () => {
  it("UnexpectedFriendsUnexpectedFriends should render correctly", () => {
    render(<UnexpectedFriendsUnexpectedFriends />);
    expect(true).toBeTruthy();
  });
});
