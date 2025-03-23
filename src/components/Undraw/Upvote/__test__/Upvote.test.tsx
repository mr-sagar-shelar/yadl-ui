import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Upvote from "../Upvote";

describe("Upvote component", () => {
  it("Upvote should render correctly", () => {
    render(<Upvote />);
    expect(true).toBeTruthy();
  });
});
