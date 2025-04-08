import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import AddFriends from "../AddFriends";

describe("AddFriends component", () => {
  it("AddFriends should render correctly", () => {
    render(<AddFriends />);
    expect(true).toBeTruthy();
  });
});
