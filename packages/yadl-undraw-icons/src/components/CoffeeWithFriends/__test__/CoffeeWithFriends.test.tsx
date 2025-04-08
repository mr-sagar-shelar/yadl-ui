import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import CoffeeWithFriends from "../CoffeeWithFriends";

describe("CoffeeWithFriends component", () => {
  it("CoffeeWithFriends should render correctly", () => {
    render(<CoffeeWithFriends />);
    expect(true).toBeTruthy();
  });
});
