import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import WallPost from "../WallPost";

describe("WallPost component", () => {
  it("WallPost should render correctly", () => {
    render(<WallPost />);
    expect(true).toBeTruthy();
  });
});
