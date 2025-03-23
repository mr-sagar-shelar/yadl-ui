import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import LikeDislike from "../LikeDislike";

describe("LikeDislike component", () => {
  it("LikeDislike should render correctly", () => {
    render(<LikeDislike />);
    expect(true).toBeTruthy();
  });
});
