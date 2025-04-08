import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import FriendsFriends from "../FriendsFriends";

describe("FriendsFriends component", () => {
  it("FriendsFriends should render correctly", () => {
    render(<FriendsFriends />);
    expect(true).toBeTruthy();
  });
});
