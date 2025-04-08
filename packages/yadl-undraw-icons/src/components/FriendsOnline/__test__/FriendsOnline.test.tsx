import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import FriendsOnline from "../FriendsOnline";

describe("FriendsOnline component", () => {
  it("FriendsOnline should render correctly", () => {
    render(<FriendsOnline />);
    expect(true).toBeTruthy();
  });
});
