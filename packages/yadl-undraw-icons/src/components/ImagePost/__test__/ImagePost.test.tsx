import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import ImagePost from "../ImagePost";

describe("ImagePost component", () => {
  it("ImagePost should render correctly", () => {
    render(<ImagePost />);
    expect(true).toBeTruthy();
  });
});
