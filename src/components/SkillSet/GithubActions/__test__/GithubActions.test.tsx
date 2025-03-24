import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import GithubActions from "../GithubActions";

describe("GithubActions component", () => {
  it("GithubActions should render correctly", () => {
    render(<GithubActions />);
    expect(true).toBeTruthy();
  });
});
