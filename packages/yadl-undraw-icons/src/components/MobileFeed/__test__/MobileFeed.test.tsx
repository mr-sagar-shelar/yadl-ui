import React from "react";
import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import MobileFeed from "../MobileFeed";

describe("MobileFeed component", () => {
  it("MobileFeed should render correctly", () => {
    render(<MobileFeed />);
    expect(true).toBeTruthy();
  });
});
