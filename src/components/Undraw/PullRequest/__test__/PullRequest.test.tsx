import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import PullRequest from "../PullRequest";

describe("PullRequest component", () => {
  it("PullRequest should render correctly", () => {
    render(<PullRequest />);
    expect(true).toBeTruthy();
  });
});
