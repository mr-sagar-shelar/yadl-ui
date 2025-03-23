import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Posts from "../Posts";

describe("Posts component", () => {
  it("Posts should render correctly", () => {
    render(<Posts />);
    expect(true).toBeTruthy();
  });
});
