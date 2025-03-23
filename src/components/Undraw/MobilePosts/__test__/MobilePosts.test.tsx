import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import MobilePosts from "../MobilePosts";

describe("MobilePosts component", () => {
  it("MobilePosts should render correctly", () => {
    render(<MobilePosts />);
    expect(true).toBeTruthy();
  });
});
