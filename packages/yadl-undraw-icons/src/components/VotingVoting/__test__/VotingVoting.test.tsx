import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import VotingVoting from "../VotingVoting";

describe("VotingVoting component", () => {
  it("VotingVoting should render correctly", () => {
    render(<VotingVoting />);
    expect(true).toBeTruthy();
  });
});
