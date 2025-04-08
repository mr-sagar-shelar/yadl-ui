import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Post from "../Post";

describe("Post component", () => {
  it("Post should render correctly", () => {
    render(<Post />);
    expect(true).toBeTruthy();
  });
});
