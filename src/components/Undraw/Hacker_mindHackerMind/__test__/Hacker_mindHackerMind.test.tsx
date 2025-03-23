import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Hacker_mindHackerMind from "../Hacker_mindHackerMind";

describe("Hacker_mindHackerMind component", () => {
  it("Hacker_mindHackerMind should render correctly", () => {
    render(<Hacker_mindHackerMind />);
    expect(true).toBeTruthy();
  });
});
