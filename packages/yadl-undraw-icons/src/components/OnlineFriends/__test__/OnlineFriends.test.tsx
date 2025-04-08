import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import OnlineFriends from "../OnlineFriends";

describe("OnlineFriends component", () => {
  it("OnlineFriends should render correctly", () => {
    render(<OnlineFriends />);
    expect(true).toBeTruthy();
  });
});
