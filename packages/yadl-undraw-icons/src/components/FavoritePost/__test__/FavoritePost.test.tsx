import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import FavoritePost from "../FavoritePost";

describe("FavoritePost component", () => {
  it("FavoritePost should render correctly", () => {
    render(<FavoritePost />);
    expect(true).toBeTruthy();
  });
});
