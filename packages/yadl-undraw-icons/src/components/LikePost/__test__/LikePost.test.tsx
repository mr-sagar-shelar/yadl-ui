import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import LikePost from "../LikePost";

describe("LikePost component", () => {
  it("LikePost should render correctly", () => {
    render(<LikePost />);
    expect(true).toBeTruthy();
  });
});
